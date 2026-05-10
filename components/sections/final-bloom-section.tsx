"use client";

import { FinalPetalBurst, FogLayer } from "@/components/garden-atmosphere";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const bloomFlowers = [
  { left: "8%", delay: "0.1s", scale: 0.86 },
  { left: "19%", delay: "0.35s", scale: 1.08 },
  { left: "32%", delay: "0.7s", scale: 0.94 },
  { left: "51%", delay: "0.2s", scale: 1.16 },
  { left: "68%", delay: "0.55s", scale: 0.96 },
  { left: "82%", delay: "0.85s", scale: 1.05 },
  { left: "93%", delay: "0.45s", scale: 0.88 },
];

export function FinalBloomSection() {
  return (
    <section
      className="final-bloom-section relative flex min-h-[115svh] items-center justify-center overflow-hidden px-5 py-28 text-ink"
      id="final-bloom"
    >
      <div className="absolute inset-0 final-sky" />
      <div className="sunrise-wash absolute inset-x-0 bottom-0 h-[70%]" />
      <div className="absolute inset-0 bg-soft-noise opacity-20" />
      <FinalPetalBurst />
      <FogLayer className="opacity-40" />

      <div aria-hidden="true" className="bird-flight bird-one">
        <span />
        <span />
      </div>
      <div aria-hidden="true" className="bird-flight bird-two">
        <span />
        <span />
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[32%] final-meadow">
        {bloomFlowers.map((flower) => (
          <span
            className="bloom-flower"
            key={`${flower.left}-${flower.delay}`}
            style={{
              left: flower.left,
              animationDelay: flower.delay,
              transform: `scale(${flower.scale})`,
            }}
          >
            <i />
          </span>
        ))}
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        data-reveal
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full border border-white/65 bg-white/40 text-rose shadow-glow backdrop-blur-xl">
          <Sparkles size={28} strokeWidth={1.4} />
        </div>
        <p className="font-script text-4xl text-rose md:text-6xl">Final Bloom</p>
        <h2 className="mt-5 font-display text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
          Thank you for helping me bloom.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl">
          The garden keeps growing, because the love that planted it never stopped.
        </p>
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/45 px-6 py-3 font-script text-3xl text-rose shadow-glow backdrop-blur-xl md:text-4xl">
          Happy Mother&apos;s Day <span aria-hidden="true">{"\u2764\uFE0F"}</span>
          <Heart className="fill-rose/20 text-rose" size={26} strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}
