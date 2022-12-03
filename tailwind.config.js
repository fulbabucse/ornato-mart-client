/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F85606",
        baseColor: "#2d3748",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
