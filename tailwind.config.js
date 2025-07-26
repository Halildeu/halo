const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paylaşılan tema ayarlarını (renkler, fontlar vb.)
  // en doğru yöntem olan takma ad (alias) ile buradan alıyoruz.
  presets: [require('@halo/tailwind-preset')],

  // Tailwind'e, projenin tamamındaki (hem uygulamalar hem de kütüphaneler)
  // ilgili dosyaları taramasını söylüyoruz. Bu en kapsayıcı ve doğru yöntemdir.
  content: [
    join(
      __dirname,
      '{apps,libs}/**/!(*.stories|*.spec).{ts,tsx,html,cjs,mjs,js}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  // Ana yapılandırmadaki tema bölümü, genellikle paylaşılan preset'i
  // genişletmek veya üzerine yazmak için kullanılır.
  // Şu an için boş bırakmak en temiz başlangıçtır.
  theme: {
    extend: {},
  },

  plugins: [],
};