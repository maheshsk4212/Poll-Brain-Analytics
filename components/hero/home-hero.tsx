"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/common/button-link";

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
    <section className="relative isolate -mt-20 min-h-screen overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.65, scale: 1.01 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
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

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950/88 via-slate-950/66 to-slate-950/35" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-slate-950/62 via-transparent to-slate-950/24" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_22%,rgba(255,153,51,0.36),transparent_34%)]" />

      <div className="section-shell relative flex min-h-[calc(100vh-5rem)] items-center pb-32 pt-12 sm:pt-16 lg:pb-36">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            {activeSlide.label}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {activeSlide.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-100">
            {activeSlide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/contact" className="bg-saffron text-slate-950 hover:bg-[#f08a1d] focus-visible:ring-saffron">
              Schedule a Confidential Consultation
            </ButtonLink>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Explore Our Services
            </Link>
          </div>

          {activeSlide.cta ? (
            <p className="mt-5 text-sm font-medium text-slate-200">{activeSlide.cta}</p>
          ) : null}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8">
        <div className="section-shell">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-3 overflow-x-auto pb-2 pr-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-xl border transition sm:h-20 sm:w-36 ${
                    index === active
                      ? "border-white shadow-lg shadow-black/30"
                      : "border-white/40 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`Show slide ${index + 1}`}
                >
                  <Image src={slide.thumb} alt={slide.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-slate-950/35" />
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/10 text-xl text-white transition hover:bg-white/20"
                aria-label="Previous slide"
              >
                {'<'}
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/45 bg-white/10 text-xl text-white transition hover:bg-white/20"
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
