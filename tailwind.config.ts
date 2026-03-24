import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: "390px" },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "display-1": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-2": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.028em" }],
        "h1": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "h2": ["2.125rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "h3": ["1.625rem", { lineHeight: "1.3", letterSpacing: "-0.015em" }],
        body: ["1rem", { lineHeight: "1.75" }],
        lead: ["1.125rem", { lineHeight: "1.8" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },
      colors: {
        text: {
          high: "var(--text-primary)",
          medium: "var(--text-secondary)",
          low: "var(--text-muted)",
        },
        brand: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          pink: "#ec4899",
        },
        surface: {
          900: "var(--bg-primary)",
          800: "var(--bg-secondary)",
          700: "var(--bg-tertiary)",
        },
        border: {
          DEFAULT: "var(--border-default)",
          subtle: "var(--border-subtle)",
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, #3b82f6 0%, #8b5cf6 52%, #ec4899 100%)",
        "hero-gradient":
          "radial-gradient(130% 120% at 50% 10%, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.22) 35%, rgba(236, 72, 153, 0.18) 60%, transparent 100%)",
      },
      boxShadow: {
        glow: "0 0 42px rgba(139, 92, 246, 0.35)",
        premium:
          "0 10px 35px rgba(2, 6, 23, 0.45), 0 2px 14px rgba(59, 130, 246, 0.16)",
        "glass-inner": "inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      },
      borderRadius: {
        "2xl-plus": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
