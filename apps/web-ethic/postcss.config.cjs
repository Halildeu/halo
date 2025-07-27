const path = require('path');

module.exports = {
  plugins: {
    'postcss-nesting': {}, // Bu satırı ekleyin
    '@tailwindcss/postcss': {
      config: path.resolve(__dirname, '../../tailwind.config.js'),
    },
    autoprefixer: {},
  },
};