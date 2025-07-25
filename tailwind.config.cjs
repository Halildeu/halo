/** @type {import('tailwindcss').Config} */
module.exports = {
  // ❗️ BU BÖLÜM EKSİK OLMAMALI
  content: [
    'apps/**/*.{ts,tsx,html}',
    'packages/**/*.{ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        // ... diğer renkleriniz
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};