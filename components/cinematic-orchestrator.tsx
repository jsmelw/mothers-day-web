"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function CinematicOrchestrator() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 46, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.to("#memory-garden", {
        "--nightfall": 0.82,
        ease: "none",
        scrollTrigger: {
          trigger: "#memory-garden",
          start: "top 70%",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(".roots-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#roots",
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.7,
        },
      });

      gsap.to(".sunrise-wash", {
        opacity: 1,
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "#final-bloom",
          start: "top 78%",
          end: "center 45%",
          scrub: 0.8,
        },
      });

      gsap.to("[data-parallax-soft]", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
