/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#78000d",
          dark: "#5a0009",
          light: "#9a1d20",
          muted: "#c94040",
        },
        ink: {
          DEFAULT: "#1a1c1c",
          soft: "#2f3131",
        },
        surface: {
          lightest: "#f9f9f9",
          light: "#f3f3f4",
          mid: "#e8e8e8",
        },
        navy: "#505e7c",
      },
      fontFamily: {
        headline: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
