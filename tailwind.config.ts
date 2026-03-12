import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1651", // Deep blue
        gold: "#FBBF24",
        light: "#FFFFFF",
        black: "#000000",
        gray: "#DADADABC",
        darkGray: "#333333",
        dark: "#212121",
        green: "#2739ae",
        deepGreen: "#05431c",
        blue: "#0AA543",
        red: "#E3342F",
      },
    },
  },
  plugins: [],
};

export default config;
