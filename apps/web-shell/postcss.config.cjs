// postcss.config.cjs
const path = require('path');

module.exports = {
  plugins: {
    'postcss-nesting': {},

    /* Tailwind v4 PostCSS eklentisi */
    '@tailwindcss/postcss': {
      config: path.resolve(__dirname, '../../tailwind.config.js'),
    },

    autoprefixer: {},
  },
};