"use client";

import { Flower2 } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Memories", href: "#memories" },
  { label: "Letters", href: "#letters" },
  { label: "Timeline", href: "#roots" },
  { label: "Final Message", href: "#final-bloom" },
];

export function Navbar() {
  return (
    <motion.header
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border border-white/45 bg-white/24 px-3 py-2 text-ink shadow-[0_18px_55px_rgba(62,47,53,0.11)] backdrop-blur-2xl md:top-5 md:px-4"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.35, ease: "easeOut" }}
    >
      <nav className="flex items-center justify-between gap-3">
        <a
          className="flex min-w-0 items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight transition hover:bg-white/35"
          href="#home"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream/70 text-rose shadow-glow">
            <Flower2 size={17} strokeWidth={1.7} />
          </span>
          <span className="hidden font-display text-base sm:inline">The Garden You Grew</span>
        </a>

        <div className="flex items-center gap-1 overflow-x-auto rounded-full md:gap-2">
          {navItems.map((item) => (
            <a
              className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/65 transition duration-300 hover:bg-white/40 hover:text-ink md:text-[0.68rem]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
