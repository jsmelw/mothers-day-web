import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF6EA",
        blush: "#F7B8C8",
        lavender: "#D9C7F2",
        sage: "#B7C7A3",
        peach: "#F7B385",
        rose: "#C77B83",
        ink: "#3E2F35",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        glow: "0 0 36px rgba(247, 184, 200, 0.35)",
        lantern: "0 0 54px rgba(247, 179, 133, 0.45)",
      },
      backgroundImage: {
        "paper-grain": "url('/textures/paper-grain.svg')",
        "soft-noise": "url('/textures/soft-noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
