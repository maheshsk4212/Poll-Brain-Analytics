"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPinOff, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center sm:py-32">
      {/* Background ambient glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.08),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(10,61,145,0.1),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md rounded-3xl border border-white/10 bg-surface/50 p-8 shadow-premium backdrop-blur-md"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-saffron/10 text-saffron">
          <MapPinOff className="h-6 w-6" />
        </div>

        <h1 className="mt-6 font-heading text-4xl font-black uppercase tracking-tighter text-[var(--text-primary)] sm:text-5xl">
          404
        </h1>
        <h2 className="mt-2 text-lg font-bold uppercase tracking-wider text-saffron">
          Page Not Found
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          The political strategy node, campaign intelligence sheet, or path you are looking for does not exist or has been archived.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="default" className="w-full">
              Return to HQ
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" size="default" className="w-full group">
              Contact Strategy Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
