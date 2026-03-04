import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "var(--saffron)",
          highlight: "var(--saffron-highlight)"
        },
        indiaGreen: "var(--india-green)",
        strategicBlue: "var(--strategic-blue)",
        background: {
          DEFAULT: "var(--background)",
          surface: "var(--surface)",
          surface2: "var(--surface-2)"
        },
        border: {
          subtle: "var(--border-color)",
          subtle2: "var(--border-color-2)"
        },
        card: {
          bg: "var(--card-bg)",
          border: "var(--card-border)"
        },
        theme: {
          text: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"]
      },
      backgroundImage: {
        "tricolor-gradient": "linear-gradient(90deg, #FF6A00, #FFFFFF, #138808)",
        "saffron-highlight": "linear-gradient(90deg, #FF6A00, #FF8C42)",
        "hero-glow": "radial-gradient(circle at 80% 20%, rgba(10, 61, 145, 0.30), transparent 48%)"
      }
    }
  },
  plugins: []
};

export default config;
