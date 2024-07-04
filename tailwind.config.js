/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     screens: {
//       sm: '480px',
//       md: '768px',
//       lg: '976px',
//       xl: '1440px',
//     },
//     colors: {
//       'blue': '#1fb6ff',
//       'pink': '#ff49db',
//       'orange': '#ff7849',
//       'green': '#13ce66',
//       'gray-dark': '#273444',
//       'gray': '#8492a6',
//       'gray-light': '#d3dce6',
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   }
// }



// @layer base {
//   :root {
//     /* For rgb(255 115 179 / <alpha-value>) */
//     --color-primary: 255 115 179;

//     /* For hsl(198deg 93% 60% / <alpha-value>) */
//     --color-primary: 198deg 93% 60%;

//     /* For rgba(255, 115, 179, <alpha-value>) */
//     --color-primary: 255, 115, 179;
//   }
// }