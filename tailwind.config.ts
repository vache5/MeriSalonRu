import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C8A27C",
        dark: "#1A1B1E",
        light: "#FFFFFF",
        soft: "#F9F7F5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 18px 55px -25px rgba(26, 27, 30, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
