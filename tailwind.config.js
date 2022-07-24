/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '375px' },
      },
      fontFamily: {
        main: ['Outfit'],
      },
      fontSize: {
        base2: '15px',
      },
      colors: {
        hslWhite: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
      width: {
        90: '22rem',
      },
    },
  },
  plugins: [],
};
