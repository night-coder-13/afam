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
      // ...
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
