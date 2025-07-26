const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('./packages/tailwind-preset/src/index.cjs')],
  content: [
    join(__dirname, 'apps/**/*.{js,ts,jsx,tsx,html}'),
    join(__dirname, 'packages/**/*.{js,ts,jsx,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
};