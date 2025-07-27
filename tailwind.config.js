const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // SADECE BU UYGULAMAYI TARA
  content: [join(__dirname, 'apps/web-shell/src/**/*.{ts,tsx,html,js}')],

  // BASİT BİR TEMA
  theme: {
    extend: {
      colors: {
        // Test için çok belirgin bir renk
        'test-red': '#ff0000',
      },
    },
  },
  plugins: [],
};