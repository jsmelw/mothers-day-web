"use client";

import { FireflyField, FogLayer, PetalField } from "@/components/garden-atmosphere";
import { memories, type Memory } from "@/data/garden-content";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const flowerTone = {
  blush: "flower-blush",
  lavender: "flower-lavender",
  peach: "flower-peach",
  sage: "flower-sage",
};

export function MemoryGardenSection() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

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
            Tap a glowing blossom to open a memory.
          </p>
        </div>

        <div className="garden-bed relative mt-12 min-h-[720px] flex-1 rounded-[2rem] border border-white/12 bg-white/[0.04]">
          <div className="absolute inset-x-0 bottom-0 h-[52%] rounded-b-[2rem] garden-ground" />
          <div className="absolute bottom-0 left-0 right-0 h-48 rounded-b-[2rem] bg-gradient-to-t from-black/25 to-transparent" />

          {memories.map((memory) => (
            <FlowerButton
              key={memory.id}
              memory={memory}
              onClick={() => setSelectedMemory(memory)}
            />
          ))}
        </div>
      </div>

      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    </section>
  );
}

/* FLOWER */

function FlowerButton({ memory, onClick }: any) {
  return (
    <motion.button
      className="absolute z-10"
      onClick={onClick}
      style={{
        left: memory.flower.x,
        top: memory.flower.y,
        transform: `scale(${memory.flower.scale})`,
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: memory.flower.scale * 0.95 }}
      type="button"
    >
      <span className="flower-stem" />
      <span className={cn("flower-head", memory.flower.color)}>
        <span className="flower-petal" />
        <span className="flower-center" />
      </span>
    </motion.button>
  );
}

/* MODAL */

function MemoryModal({ memory, onClose }: any) {
  if (!memory) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] grid place-items-center bg-ink/45 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-3xl rounded-2xl bg-cream p-6 text-ink"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X />
          </button>

          <img
            src={memory.imageSrc}
            alt={memory.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <h2 className="mt-4 text-2xl font-bold">{memory.title}</h2>
          <p className="mt-2">{memory.body}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}