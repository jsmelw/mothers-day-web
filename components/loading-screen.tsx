"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1350);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-label="Preparing the memory garden"
          className="fixed inset-0 z-[100] grid place-items-center bg-cream text-ink"
          exit={{ opacity: 0, filter: "blur(14px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="grid h-16 w-16 place-items-center rounded-full border border-rose/20 bg-white/45 text-rose shadow-glow backdrop-blur"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Flower2 size={28} strokeWidth={1.5} />
            </motion.div>
            <div className="text-center">
              <p className="font-script text-3xl text-rose">The Garden You Grew</p>
              <p className="mt-2 text-xs uppercase tracking-[0.32em] text-ink/45">
                opening softly
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
