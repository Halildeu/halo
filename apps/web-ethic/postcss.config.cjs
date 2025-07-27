const path = require('path');

module.exports = {
  plugins: {
    'postcss-nesting': {},
    tailwindcss: {
      config: path.resolve(__dirname, '../../tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
