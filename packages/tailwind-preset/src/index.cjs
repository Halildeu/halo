// packages/tailwind-preset/src/index.cjs

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        secondary: {
          light: '#fde047',
          DEFAULT: '#facc15',
          dark: '#eab308',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Source Serif Pro"', 'serif'],
      },
    },
  },
  plugins: [],
};