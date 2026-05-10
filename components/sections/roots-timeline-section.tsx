"use client";

import { timelineMoments } from "@/data/garden-content";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";

export function RootsTimelineSection() {
  return (
    <section className="roots-section relative overflow-hidden px-5 py-28 text-cream" id="roots">
      <div className="absolute inset-0 roots-bg" />
      <div className="absolute inset-0 bg-soft-noise opacity-25" />
      <div aria-hidden="true" className="root-particle root-particle-one" />
      <div aria-hidden="true" className="root-particle root-particle-two" />
      <div aria-hidden="true" className="root-particle root-particle-three" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="font-script text-4xl text-peach md:text-5xl">Roots Timeline</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Beneath every bloom, your love was growing roots.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/68">
            A quiet path of moments, held beneath the garden like light under soil.
          </p>
        </div>

        <div className="root-map relative mx-auto mt-20 max-w-5xl pb-12 pt-8">
          <div aria-hidden="true" className="roots-main-line" />
          <div aria-hidden="true" className="roots-progress" />

          <div className="space-y-20 md:space-y-10">
            {timelineMoments.map((moment, index) => (
              <motion.div
                className={cn(
                  "root-milestone relative grid min-h-[240px] items-center md:grid-cols-2",
                  moment.side === "left" ? "md:text-right" : "md:text-left",
                )}
                initial={{ opacity: 0, y: 26 }}
                key={moment.id}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-16%" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <figure
                  className={cn(
                    "root-memory",
                    moment.side === "left" ? "md:col-start-1 md:mr-16" : "md:col-start-2 md:ml-16",
                    moment.tilt === "left" ? "root-memory-tilt-left" : "root-memory-tilt-right",
                  )}
                >
                  <div
                    className="root-photo-shell"
                    style={{
                      backgroundImage: `linear-gradient(rgba(21, 18, 15, 0.12), rgba(21, 18, 15, 0.52)), url("${moment.imageSrc}")`,
                    }}
                  >
                    <div className="root-photo-frame">
                      <Image
                        alt={moment.title}
                        className="static-photo"
                        fill
                        sizes="(max-width: 768px) 82vw, 360px"
                        src={moment.imageSrc}
                        unoptimized
                      />
                    </div>
                  </div>
                  <figcaption className="root-whisper">
                    <h3>{moment.title}</h3>
                    <p>{moment.body}</p>
                  </figcaption>
                </figure>

                <div aria-hidden="true" className="root-node md:left-1/2">
                  <span />
                </div>
                <div
                  aria-hidden="true"
                  className={cn(
                    "root-branch",
                    moment.side === "left" ? "root-branch-left" : "root-branch-right",
                  )}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
