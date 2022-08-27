// // tailwind.config.js
// const colors = require('tailwindcss/colors')

// module.exports = {
//   purge:["./src/**/*.vue"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     colors: {
//       // Build your palette here
//       transparent: 'transparent',
//       current: 'currentColor',
//       gray: colors.trueGray,
//       red: colors.red,
//       blue: colors.sky,
//       yellow: colors.amber,
//     }
//   }
// }
module.exports = {
  purge:["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue': {
          100: '#DFF6FF',
          // 200: '#a5f3fc',
          // 300: '#67e8f9',
          400: '#33a1f5',
          500: '#1363DF',
          // 600: '#0891b2',
          // 700: '#0e7490',
          // 800: '#155e75',
          900: '#06283D',
        }, 
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      height: {
        '128': '37rem',
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
