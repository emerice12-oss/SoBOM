import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C2D", // Deep blue
        gold: "#FBBF24",
        light: "#FFFFFF",
        gray: "#f5f5f5bc",
        darkGray: "#333333",
        black: "#000000",
        blue: "#184169",
      },
    },
  },
  plugins: [],
};

export default config;
