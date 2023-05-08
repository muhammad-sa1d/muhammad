/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter',],
      },
      colors: {
        'bread': {
          '100': '#001F48',
          '200': '#949494',
        }
      },
      spacing: {
        '10sm': '10px',
        '18': '18px',
        '79': '79px',
        '99': '99px',
        '182': '182px',
        '241': '241px',
        '262': '262px',
        '346': '346px',
        '481': '481px',
        '573': '573px',
        '630': '630px',
        '615': '615px',
        '71': '71px',
        '17r': '18rem',
        '811': '811px',
        '22r': '22rem',
      },
      maxWidth: {
        '1160': '1160px',
        '480': '480px',
        '1024': '1024px',
      },
      backgroundImage: {
        'hero-header': "url('../img/header-bg.png')",
      },
      fontSize: {
        '8sm': '28px',
      },
      rotate: {
        '18': '18deg',
      },
      fontSize: {
        '55lg': '55px',
        '40lg': '40px',
        '7xs': '7px',
      },
      screens: {
        'xs': '376px',
        // => @media (min-width: 376px) { ... }
      },
      boxShadow: {
        '4xl': ' 0.5px 0.5px 5px 3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

