import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B192C",
          light: "#1A2B3C",
          muted: "#162336",
        },
        gold: {
          DEFAULT: "#FFC436",
          hover: "#EBB22F",
          muted: "rgba(255,196,54,0.15)",
        },
        blue: {
          glow: "#91C8E4",
          "glow-muted": "rgba(145,200,228,0.15)",
        },
        light: {
          DEFAULT: "#F5F5F7",
          muted: "#E8E8EA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Geist", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "8rem",
        "section-sm": "5rem",
      },
      borderRadius: {
        "premium": "1.5rem",
        "card": "2rem",
        "pill": "100px",
      },
      boxShadow: {
        "premium": "0 25px 80px -15px rgba(0,0,0,0.12)",
        "gold": "0 10px 50px -10px rgba(255,196,54,0.4)",
        "blue": "0 10px 50px -10px rgba(145,200,228,0.3)",
        "nav": "0 1px 0 0 rgba(0,0,0,0.05)",
        "card": "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(145,200,228,0.25) 0%, transparent 70%)",
        "gold-glow": "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,196,54,0.15) 0%, transparent 70%)",
        "section-fade": "linear-gradient(to bottom, #F5F5F7 0%, #FFFFFF 100%)",
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,196,54,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(255,196,54,0)" },
        },
        glow: {
          "from": { filter: "drop-shadow(0 0 20px rgba(145,200,228,0.3))" },
          "to": { filter: "drop-shadow(0 0 60px rgba(145,200,228,0.7))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
