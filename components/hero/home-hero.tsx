"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/common/button-link";
import { cn } from "@/lib/utils";

type HeroSlide = {
  id: string;
  title: string;
  description: string;
  label: string;
  cta?: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  thumb: string;
};

const slides: HeroSlide[] = [
  {
    id: "hero-video",
    title: "Building Winning Political Campaigns.",
    description:
      "Strategic Political Consulting | Data Intelligence | Ground Operations | Media and Narrative Management | Social Media",
    label: "Building Strategies To Triumph",
    cta: "Command-Ready Campaign Architecture",
    type: "video",
    src: "/videos/hero.mp4",
    poster: "/images/parliament.jpg",
    thumb: "/images/strategy-board.jpg"
  },
  {
    id: "hero-image-1",
    title: "Data-Led Election Strategy from Booth to Constituency.",
    description:
      "We align analytics, field mobilisation and message discipline into one coordinated execution framework.",
    label: "Election Strategy",
    type: "image",
    src: "/images/parliament.jpg",
    thumb: "/images/parliament.jpg"
  },
  {
    id: "hero-image-2",
    title: "Ground + Digital Integration for High-Stakes Campaigns.",
    description:
      "Real-time monitoring and adaptive communication that protects momentum through every campaign phase.",
    label: "Integrated Operations",
    type: "image",
    src: "/images/field-outreach.jpg",
    thumb: "/images/field-outreach.jpg"
  },
  {
    id: "hero-image-3",
    title: "Narrative Control with Confidential Strategic Execution.",
    description:
      "From research intelligence to election-day management, every decision is measured, structured and secure.",
    label: "Media & Narrative",
    type: "image",
    src: "/images/media-room.jpg",
    thumb: "/images/media-room.jpg"
  }
];

export function HomeHero() {
  const [active, setActive] = useState(0);

  const activeSlide = useMemo(() => slides[active], [active]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => setActive((prev) => (prev + 1) % slides.length);
  const goPrev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative isolate -mt-20 h-screen overflow-hidden pt-20">
      {/* Background Media */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 -z-30"
        >
          {activeSlide.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={activeSlide.poster}
              className="h-full w-full object-cover"
            >
              <source src={activeSlide.src} type="video/mp4" />
            </video>
          ) : (
            <Image src={activeSlide.src} alt={activeSlide.title} fill priority className="object-cover" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Background Layers for Contrast */}
      <div className="absolute inset-0 -z-20 bg-slate-950/45 shadow-inner" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="section-shell relative flex h-full items-center pb-20 pt-16 sm:pb-24 sm:pt-6 lg:pb-32">
        <motion.div
          key={activeSlide.id + "-content"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-full max-w-4xl"
        >
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            {/* Tag/Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block rounded-sm bg-saffron px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-950">
                {activeSlide.label}
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] drop-shadow-2xl">
              {activeSlide.title.split('.').map((part, i) => (
                <span key={i} className="block">{part}{i === 0 && part.length > 0 ? '.' : ''}</span>
              ))}
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-slate-200 subpixel-antialiased drop-shadow-lg">
              {activeSlide.description}
            </p>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:items-center">
              <ButtonLink
                href="/contact"
                className="w-full bg-saffron px-8 py-4 text-center text-slate-950 hover:bg-saffron/90 transition-all duration-300 shadow-xl shadow-saffron/20 border-none rounded-sm sm:w-auto"
              >
                JOIN THE CAMPAIGN
              </ButtonLink>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-sm border border-white/80 bg-transparent px-8 py-4 text-center text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-slate-950 active:scale-95 sm:w-auto"
              >
                EXPLORE ARCHITECTURE
              </Link>
            </div>

            {/* CTA/Sub-label */}
            {activeSlide.cta && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-white/60"
              >
                <div className="hidden h-0.5 w-8 bg-saffron sm:block" />
                {activeSlide.cta}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute inset-x-0 bottom-8">
        <div className="section-shell">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-3 overflow-x-auto pb-4 pr-4 scrollbar-hide md:pb-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "relative h-14 w-24 shrink-0 overflow-hidden rounded-sm border-2 transition-all duration-300 sm:h-20 sm:w-36",
                    index === active
                      ? "border-saffron scale-105 shadow-2xl brightness-125"
                      : "border-white/20 opacity-40 hover:opacity-100 hover:border-white/60"
                  )}
                  aria-label={`Show slide ${index + 1}`}
                >
                  <Image src={slide.thumb} alt={slide.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-slate-950/40" />
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-12 w-12 items-center justify-center border border-white/40 bg-slate-950/50 text-xl text-white transition-all hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                {'<'}
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-12 w-12 items-center justify-center border border-white/40 bg-slate-950/50 text-xl text-white transition-all hover:bg-white hover:text-slate-950 hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
