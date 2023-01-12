module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'alr-red': '#E64848',
        'alr-grey': '#303030',
        'alr-white': '#F5F5F5',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
