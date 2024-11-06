/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5", // bg-gray-100
        blueCustom: "#0A6CF8",
        colorLetra: "#BFC7D2",
      },
      screens: {
        // Definiendo tus propios puntos de ruptura
        sm: '640px',  // Pantallas pequeñas
        md: '855px',  // Pantallas medianas
        lg: '1024px', // Pantallas grandes
        xl: '1280px', // Pantallas extra grandes
        '2xl': '1536px', // Pantallas muy grandes
      },
    },
  },
  plugins: [],
};
// extend: {
//   spacing: {
//     '128': '32rem',
//     '144': '36rem',
//   },
//   borderRadius: {
//     '4xl': '2rem',
//   },
//   fontFamily: {
//     sans: ['Graphik', 'sans-serif'],
//     serif: ['Merriweather', 'serif'],
//   },
//   fontSize: {
//     'xs': '.75rem',
//     'sm': '.875rem',
//     'tiny': '.875rem',
//     'base': '1rem',
//     'lg': '1.125rem',
//     'xl': '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '4rem',
//     '7xl': '5rem',
//   },
// },
