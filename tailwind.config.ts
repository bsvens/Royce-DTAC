import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Restrained, system-serious palette. No purple.
        ink: {
          DEFAULT: "#0f172a", // slate-900
          soft: "#1e293b", // slate-800
          muted: "#475569", // slate-600
        },
        accent: {
          DEFAULT: "#b45309", // amber-700 — safety, without alarm
          strong: "#92400e", // amber-800
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "68rem",
      },
    },
  },
  plugins: [],
};

export default config;
