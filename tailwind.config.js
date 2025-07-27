const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paylaşılan tema ayarlarını preset dosyasından alıyoruz
  // (repo köküne göre göreli yol).
  presets: [require('./libs/ui/tailwind-preset/src/index.cjs')],

  // Tüm uygulama ve kütüphanelerdeki stilleri taramak için geniş içerik globu
  content: [
    join(
      __dirname,
      '{apps,libs}/**/!(*.stories|*.spec).{ts,tsx,html,cjs,mjs,js}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  // Preset'i genişletmek için kullanabileceğiniz alan
  theme: {
    extend: {},
  },

  plugins: [],
};