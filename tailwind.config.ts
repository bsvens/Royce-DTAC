import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Committed dark, instrument-panel world. Cool graphite grounds,
        // near-white cool text, one bold accent: hazard amber. No purple.
        base: "#0a0d13",
        panel: "#111621",
        panel2: "#171d29",
        ink: {
          DEFAULT: "#eef2f7",
          muted: "#9aa5b4",
          faint: "#6b7688",
        },
        accent: {
          DEFAULT: "#f5a524",
          strong: "#d98a12",
          soft: "#f7b84e",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        "glow-drift": {
          "0%, 100%": { opacity: "0.45", transform: "translate3d(0,0,0) scale(1)" },
          "50%": { opacity: "0.7", transform: "translate3d(2%, -3%, 0) scale(1.06)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "glow-drift": "glow-drift 14s ease-in-out infinite",
        "ticker": "ticker 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
