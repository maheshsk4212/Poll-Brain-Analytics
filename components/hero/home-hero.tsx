"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSlider } from "./hero-slider";
import { Shield, TrendingUp } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-screen pb-16 overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_50%,rgba(10,61,145,0.15),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(255,106,0,0.05),transparent_50%)]" />

      <div className="section-shell grid lg:grid-cols-2 gap-12 items-center h-[calc(100vh-5rem)]">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8 z-10"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-heading font-black text-[var(--text-primary)] leading-[0.9] tracking-tighter uppercase"
            >
              Building<br />
              <span className="text-transparent bg-clip-text bg-tricolor-gradient">Winning</span><br />
              Political<br />
              Campaigns
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed border-l-4 border-saffron pl-4"
            >
              Strategic Political Consulting | Data Intelligence | Ground Operations |
              Media & Narrative Management | Social Media
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">
                Schedule a Confidential Consultation
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                Explore Our Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative w-full"
        >
          <HeroSlider />

          {/* Floating trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="absolute -bottom-4 -left-4 z-30 flex items-center gap-2 rounded-xl border border-[var(--border-color-2)] bg-[var(--card-bg)]/80 px-3 py-2 shadow-xl backdrop-blur-md"
          >
            <Shield className="h-4 w-4 text-saffron" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-primary)]">Confidential</p>
              <p className="text-[9px] text-[var(--text-secondary)]">High-Trust Advisory</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -top-4 -right-4 z-30 flex items-center gap-2 rounded-xl border border-[var(--border-color-2)] bg-[var(--card-bg)]/80 px-3 py-2 shadow-xl backdrop-blur-md"
          >
            <TrendingUp className="h-4 w-4 text-indiaGreen" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-primary)]">72% Win Rate</p>
              <p className="text-[9px] text-[var(--text-secondary)]">Across campaigns</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
