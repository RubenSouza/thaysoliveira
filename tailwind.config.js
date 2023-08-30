/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
    serif: ["Roboto Serif", "serif"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#605477",
          200: "#9685BA",
          300: "#AC9ACC",
          400: "#B5A1DA",
        },
        button: {
          100: "#f467a4",
          200: "#3CD3C1",
        },
      },
    },
  },
  plugins: [],
};
