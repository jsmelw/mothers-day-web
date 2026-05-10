"use client";

import { timelineMoments } from "@/data/garden-content";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

export function RootsTimelineSection() {
  return (
    <section className="roots-section relative overflow-hidden px-5 py-28 text-cream" id="roots">
      <div className="absolute inset-0 roots-bg" />
      <div className="absolute inset-0 bg-soft-noise opacity-25" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Roots Timeline</h2>
        </div>

        <div className="mt-20 space-y-16">
          {timelineMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              className={cn(
                "grid items-center md:grid-cols-2",
                moment.side === "left" ? "md:text-right" : "md:text-left"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <img
                  src={moment.imageSrc}
                  alt={moment.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold">{moment.title}</h3>
                <p>{moment.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}