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
        saffron: "#FF9933",
        indiaGreen: "#138808",
        navyBlue: "#1A237E",
        ink: "#111827",
        soft: "#f4f6fb"
      },
      boxShadow: {
        premium: "0 20px 55px -30px rgba(13, 24, 64, 0.45)"
      },
      backgroundImage: {
        "flag-gradient": "linear-gradient(135deg, rgba(255,153,51,0.14) 0%, rgba(255,255,255,0.96) 40%, rgba(19,136,8,0.16) 100%)",
        "navy-glow": "radial-gradient(circle at 80% 20%, rgba(26,35,126,0.30), transparent 48%)"
      }
    }
  },
  plugins: []
};

export default config;
