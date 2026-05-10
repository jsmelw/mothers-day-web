import { cn } from "@/lib/cn";

const petals = [
  { left: "8%", delay: "0s", duration: "13s", size: "0.55rem" },
  { left: "18%", delay: "2.5s", duration: "16s", size: "0.42rem" },
  { left: "29%", delay: "4s", duration: "14s", size: "0.62rem" },
  { left: "43%", delay: "1.5s", duration: "17s", size: "0.5rem" },
  { left: "58%", delay: "3.7s", duration: "15s", size: "0.48rem" },
  { left: "69%", delay: "0.8s", duration: "18s", size: "0.58rem" },
  { left: "82%", delay: "5.2s", duration: "16s", size: "0.46rem" },
  { left: "93%", delay: "2.1s", duration: "19s", size: "0.52rem" },
];

const fireflies = [
  { left: "12%", top: "43%", delay: "0s" },
  { left: "22%", top: "62%", delay: "1.3s" },
  { left: "41%", top: "34%", delay: "2.4s" },
  { left: "57%", top: "55%", delay: "0.7s" },
  { left: "73%", top: "38%", delay: "1.9s" },
  { left: "86%", top: "58%", delay: "3s" },
];

const finalPetals = [
  { left: "7%", delay: "0s", duration: "10s" },
  { left: "19%", delay: "1.5s", duration: "12s" },
  { left: "31%", delay: "0.7s", duration: "11s" },
  { left: "46%", delay: "2.2s", duration: "13s" },
  { left: "62%", delay: "1.1s", duration: "10s" },
  { left: "77%", delay: "2.8s", duration: "12s" },
  { left: "90%", delay: "0.3s", duration: "11s" },
];

export function PetalField({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {petals.map((petal) => (
        <span
          className="petal"
          key={`${petal.left}-${petal.delay}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: `calc(${petal.size} * 1.45)`,
          }}
        />
      ))}
    </div>
  );
}

export function FireflyField({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {fireflies.map((firefly) => (
        <span
          className="firefly"
          key={`${firefly.left}-${firefly.top}`}
          style={{
            left: firefly.left,
            top: firefly.top,
            animationDelay: firefly.delay,
          }}
        />
      ))}
    </div>
  );
}

export function FogLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-1/2", className)}>
      <span className="fog fog-one" />
      <span className="fog fog-two" />
    </div>
  );
}

export function FinalPetalBurst({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {finalPetals.map((petal) => (
        <span
          className="final-petal"
          key={`${petal.left}-${petal.delay}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}
