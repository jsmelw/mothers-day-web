"use client";

import { useEffect, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

export function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor='soft']")));
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[95] hidden h-3 w-3 rounded-full bg-rose/70 mix-blend-multiply transition-transform duration-150 ease-out md:block"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${
            active ? 0.65 : 1
          })`,
        }}
      />
      <div
        className="pointer-events-none fixed z-[94] hidden h-10 w-10 rounded-full border border-rose/35 bg-white/10 backdrop-blur-[1px] transition-transform duration-300 ease-out md:block"
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${
            active ? 1.65 : 1
          })`,
        }}
      />
    </>
  );
}
