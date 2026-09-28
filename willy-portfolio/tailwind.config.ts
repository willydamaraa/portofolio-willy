import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        ink: "#1C2333",
        charcoal: "#22252B",
        blue: {
          DEFAULT: "#6E93C7",
          soft: "#AFC6E6",
          pale: "#DEE8F6",
          deep: "#37507A",
        },
        pink: {
          DEFAULT: "#F0C3D2",
          deep: "#E39FB6",
        },
        silver: {
          DEFAULT: "#CBD1D9",
          dark: "#9AA3AF",
        },
      },
      fontFamily: {
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(28,35,51,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,35,51,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-3deg)" },
          "50%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 12s linear infinite",
        blink: "blink 1.2s step-start infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
