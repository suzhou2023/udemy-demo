/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#a435f0",
        dark: "#2d2f31",
        light: "#f7f9fa"
      },
      textColor: {
        primary: "#5624d0",
        dark: "#2d2f31",
        light: "#c0c4fc",
        normal: "#2d2f31"
      },
      borderColor: {
        primary: "#2d2f31"
      },
      textDecorationColor: {
        primary: "#5624d0",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["material-symbols", "mdi"]),
    }),
  ],
}

