/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'mv-skifer': ['MV-SKIFER', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
      // fontSize: {
      //   base: 'clamp(4.27px, calc(100vw / 75), 16px)',
      // },
      colors: {
        primary: '#04061B',
      },
    },
  },
  plugins: [],
};
