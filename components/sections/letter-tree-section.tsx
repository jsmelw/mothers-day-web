"use client";

import { FireflyField, FogLayer } from "@/components/garden-atmosphere";
import { letters, type Letter } from "@/data/garden-content";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MailOpen, X } from "lucide-react";
import { useEffect, useState } from "react";

export function LetterTreeSection() {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  return (
    <section
      className="letter-tree-section relative min-h-[120svh] overflow-hidden px-5 py-28 text-ink"
      id="letters"
    >
      <div className="absolute inset-0 letter-sky" />
      <div className="absolute inset-0 bg-soft-noise opacity-25" />
      <FireflyField className="opacity-60" />
      <FogLayer className="opacity-50" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div data-reveal>
          <p className="font-script text-4xl text-rose md:text-5xl">Letter Tree</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Words I Could Never Fully Say
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-ink/65">
            Warm paper notes hang from the branches like lanterns, each one holding a quiet thank
            you.
          </p>
        </div>

        <div className="tree-stage relative min-h-[680px]" data-reveal>
          <div aria-hidden="true" className="moon-lantern" />
          <div aria-hidden="true" className="tree-root-shadow" />
          <div aria-hidden="true" className="tree-trunk" />
          <div aria-hidden="true" className="tree-branch branch-one" />
          <div aria-hidden="true" className="tree-branch branch-two" />
          <div aria-hidden="true" className="tree-branch branch-three" />
          <div aria-hidden="true" className="tree-canopy tree-canopy-one" />
          <div aria-hidden="true" className="tree-canopy tree-canopy-two" />
          <div aria-hidden="true" className="tree-canopy tree-canopy-three" />
          <div aria-hidden="true" className="warm-lantern lantern-one" />
          <div aria-hidden="true" className="warm-lantern lantern-two" />

          {letters.map((letter) => (
            <EnvelopeButton
              key={letter.id}
              letter={letter}
              onClick={() => setSelectedLetter(letter)}
            />
          ))}
        </div>
      </div>

      <LetterModal letter={selectedLetter} onClose={() => setSelectedLetter(null)} />
    </section>
  );
}

function EnvelopeButton({ letter, onClick }: { letter: Letter; onClick: () => void }) {
  return (
    <motion.button
      aria-label={`Open letter: ${letter.title}`}
      className="envelope-button absolute z-20"
      data-cursor="soft"
      initial={{ opacity: 0, y: -12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ delay: letter.delay, duration: 0.75, ease: "easeOut" }}
      onClick={onClick}
      style={{
        left: letter.x,
        top: letter.y,
        animationDelay: `${letter.delay}s`,
      }}
      type="button"
      whileHover={{ y: -8, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="envelope-string" />
      <span className="envelope-paper">
        <Mail size={26} strokeWidth={1.55} />
      </span>
      <span className="envelope-caption">{letter.title}</span>
    </motion.button>
  );
}

function LetterModal({ letter, onClose }: { letter: Letter | null; onClose: () => void }) {
  useEffect(() => {
    if (!letter) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letter, onClose]);

  return (
    <AnimatePresence>
      {letter ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/40 px-4 py-8 backdrop-blur-md"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
          role="dialog"
        >
          <motion.article
            className="letter-modal relative max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-[1.6rem] border border-white/65 bg-cream bg-paper-grain p-6 text-ink shadow-[0_30px_100px_rgba(34,24,28,0.26)] md:p-10"
            exit={{ opacity: 0, y: 32, rotateX: -9 }}
            initial={{ opacity: 0, y: 34, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.48, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close letter"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/60 text-ink transition hover:bg-white"
              onClick={onClose}
              type="button"
            >
              <X size={18} />
            </button>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/10 text-rose">
              <MailOpen size={28} strokeWidth={1.45} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose/70">
              handwritten letter
            </p>
            <h3 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
              {letter.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/55">{letter.preview}</p>
            <div className="mt-7 whitespace-pre-line border-l-2 border-rose/20 pl-5 font-script text-3xl leading-snug text-rose md:text-4xl">
              {letter.body}
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
