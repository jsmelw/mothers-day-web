"use client";

import { FireflyField, FogLayer, PetalField } from "@/components/garden-atmosphere";
import { memories, type Memory } from "@/data/garden-content";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const flowerTone = {
  blush: "flower-blush",
  lavender: "flower-lavender",
  peach: "flower-peach",
  sage: "flower-sage",
};

export function MemoryGardenSection() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // 🔧 FIX: ensures interaction reset after modal close
  useEffect(() => {
    if (!selectedMemory) {
      document.body.style.pointerEvents = "auto";
    }
  }, [selectedMemory]);

  return (
    <section
      className="memory-garden relative min-h-[145svh] overflow-hidden px-5 py-28 text-cream"
      id="memories"
      style={{ "--nightfall": 0 } as React.CSSProperties}
    >
      <div className="absolute inset-0 memory-garden-sky" />
      <div className="absolute inset-0 bg-soft-noise opacity-30" />
      <PetalField className="opacity-70" />
      <FireflyField className="opacity-90" />
      <FogLayer className="opacity-80" />

      <div className="relative z-10 mx-auto flex min-h-[124svh] w-full max-w-6xl flex-col">
        <div className="max-w-2xl" data-reveal>
          <p className="font-script text-4xl text-peach md:text-5xl">Memory Garden</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream md:text-6xl">
            Each bloom keeps a little piece of us.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-cream/72">
            Tap a glowing blossom to open a memory, held softly inside the scrapbook.
          </p>
        </div>

        <div className="garden-bed relative mt-12 min-h-[720px] flex-1 rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[2px] md:mt-18">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[52%] rounded-b-[2rem] garden-ground" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-48 rounded-b-[2rem] bg-gradient-to-t from-black/25 to-transparent" />

          {memories.map((memory) => (
            <FlowerButton
              key={memory.id}
              memory={memory}
              onClick={() => setSelectedMemory(memory)}
            />
          ))}

          <div aria-hidden="true" className="absolute left-[7%] top-[30%] h-24 w-24 rounded-full bg-blush/20 blur-3xl" />
          <div aria-hidden="true" className="absolute right-[9%] top-[18%] h-28 w-28 rounded-full bg-lavender/20 blur-3xl" />
        </div>
      </div>

      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    </section>
  );
}

/* ================= FLOWER ================= */

function FlowerButton({ memory, onClick }: { memory: Memory; onClick: () => void }) {
  return (
    <motion.button
      aria-label={`Open memory: ${memory.title}`}
      className="flower-button absolute z-10"
      data-cursor="soft"
      onClick={onClick}
      style={{
        left: memory.flower.x,
        top: memory.flower.y,
        transform: `scale(${memory.flower.scale})`,
        animationDelay: `${memory.flower.delay}s`,
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: memory.flower.scale * 0.95 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      type="button"
    >
      <span className="flower-stem" />
      <span className={cn("flower-head", flowerTone[memory.flower.color])}>
        <span className="flower-petal petal-a" />
        <span className="flower-petal petal-b" />
        <span className="flower-petal petal-c" />
        <span className="flower-petal petal-d" />
        <span className="flower-center" />
        <span className="flower-spark flower-spark-one" />
        <span className="flower-spark flower-spark-two" />
      </span>
    </motion.button>
  );
}

/* ================= MODAL ================= */

function MemoryModal({ memory, onClose }: { memory: Memory | null; onClose: () => void }) {
  useEffect(() => {
    if (!memory) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [memory, onClose]);

  return (
    <AnimatePresence initial={false} mode="sync">
      {memory && (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/45 px-4 py-8 backdrop-blur-md"
          style={{ pointerEvents: "auto" }}
          onPointerDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.article
            className="scrapbook-modal relative grid w-full max-w-4xl gap-8 overflow-hidden rounded-[1.75rem] border border-white/55 bg-cream bg-paper-grain p-5 text-ink shadow-[0_30px_100px_rgba(34,24,28,0.28)] md:grid-cols-[0.9fr_1.1fr] md:p-8"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close memory"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/55 text-ink shadow-sm transition hover:bg-white"
              onClick={onClose}
              type="button"
            >
              <X size={18} />
            </button>

            <div className="polaroid rotate-[-2deg]">
              <div
                className="polaroid-image"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 246, 234, 0.22), rgba(62, 47, 53, 0.2)), url(${memory.imageSrc})`,
                }}
              >
                <div className="polaroid-photo-frame">
                 <img
  alt={`${memory.title} memory photo`}
  src={memory.imageSrc}
  style={{ width: "100%", height: "100%", objectFit: "contain" }}
/>
                </div>
              </div>
              <p className="mt-4 font-script text-3xl text-rose">{memory.eyebrow}</p>
            </div>

            <div className="flex flex-col justify-center pr-2">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-rose/70">
                scrapbook memory
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                {memory.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-ink/68">{memory.body}</p>
              <blockquote className="mt-7 rounded-2xl border border-rose/15 bg-white/42 p-5 font-script text-3xl leading-tight text-rose shadow-sm">
                {memory.note}
              </blockquote>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// This is a small change to trigger a rebuild
