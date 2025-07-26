// tailwind.config.js
module.exports = {
  content: [
    "./apps/**/*.{js,ts,jsx,tsx,html}",
    "./packages/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06b6d4", // Açık mavi
          dark: "#0e7490",    // Koyu mavi
        },
      },
    },
  },
  plugins: [],
};