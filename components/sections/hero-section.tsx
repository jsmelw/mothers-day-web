"use client";

import { FireflyField, FogLayer, PetalField } from "@/components/garden-atmosphere";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="hero-scene relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 text-ink"
      id="home"
    >
      <div className="absolute inset-0 hero-sky" />
      <div className="absolute inset-0 bg-soft-noise opacity-35" />
      <PetalField />
      <FireflyField className="opacity-80" />
      <FogLayer />

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[42%]">
        <div className="garden-hill garden-hill-back" data-parallax-soft />
        <div className="garden-hill garden-hill-mid" />
        <div className="garden-hill garden-hill-front" />
      </div>

      <div className="absolute bottom-[12%] left-[8%] hidden h-28 w-28 rounded-full bg-blush/20 blur-3xl md:block" />
      <div className="absolute right-[10%] top-[22%] hidden h-32 w-32 rounded-full bg-lavender/25 blur-3xl md:block" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-5xl place-items-center text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.55, ease: "easeOut" }}
      >
        <motion.div
          aria-hidden="true"
          className="magical-book mb-7"
          initial={{ opacity: 0, scale: 0.86, rotateX: 18 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.25, delay: 0.75, ease: "easeOut" }}
        >
          <div className="book-glow" />
          <div className="book-page book-page-left" />
          <div className="book-page book-page-right" />
          <div className="book-spine" />
          <Sparkles className="book-sparkle book-sparkle-one" size={18} strokeWidth={1.6} />
          <Sparkles className="book-sparkle book-sparkle-two" size={14} strokeWidth={1.6} />
          <BookOpen className="relative z-10 text-rose/70" size={54} strokeWidth={1.25} />
        </motion.div>

        <p className="mb-4 font-script text-3xl text-rose md:text-5xl">Mother&apos;s Day</p>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-normal text-ink md:text-7xl lg:text-8xl">
          Every flower in this garden exists because of you.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/68 md:text-lg">
          A story grown with love, sacrifice, and memories.
        </p>

        <motion.a
          className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ink shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/60"
          href="#memories"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
        >
          Open the Memory Garden
          <span className="grid h-8 w-8 place-items-center rounded-full bg-rose/15 text-rose transition group-hover:bg-rose/25">
            <ChevronDown size={17} strokeWidth={2} />
          </span>
        </motion.a>
      </motion.div>

      <motion.a
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/45"
        href="#memories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        Scroll to explore
        <span className="h-10 w-px overflow-hidden rounded-full bg-ink/15">
          <span className="block h-4 w-px animate-scrollHint bg-rose/70" />
        </span>
      </motion.a>
    </section>
  );
}
