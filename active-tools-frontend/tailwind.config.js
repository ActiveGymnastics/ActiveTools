const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // primary: {
        // 100: '#8b8c9d',
        // 200: '#77798c',
        // 300: '#64667c',
        // 400: '#50536b',
        // DEFAULT: '#3d405b',
        // 600: '#313349',
        // 700: '#252637',
        // 800: '#181a24',
        // 900: '#12131b'
      // },
      accent: {
        100: '#f8b9af',
        200: '#f7ada1',
        300: '#f5a194',
        400: '#f49686',
        DEFAULT: '#f38a79',
        600: '#db7c6d',
        700: '#c26e61',
        800: '#aa6155',
        900: '#925349'
      },
      accent2: {
        100: '#ffd7a4',
        200: '#ffd095',
        300: '#ffc986',
        400: '#ffc377',
        DEFAULT: '#ffbc68',
        600: '#e6a95e',
        700: '#cc9653',
        800: '#b38449',
        900: '#99713e'
      },
      accent3: {
        100: '#a9b9f8',
        200: '#9aadf7',
        300: '#8ca1f6',
        400: '#7d96f5',
        DEFAULT: '#6f8af4',
        600: '#647cdc',
        700: '#596ec3',
        800: '#4e61ab',
        900: '#435392'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: colors.indigo
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
