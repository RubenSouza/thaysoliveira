/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto Serif", "serif"],
      glossy: ["Glossy", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "#605477",
          200: "#5F5178",
          300: "#9685BA",
          400: "#AC9ACC",
          500: "#B5A1DA",
          600: "#E3D7F9",
        },
        secondary: {
          100: "#222222",
          200: "#1A1818",
        },
        button: {
          100: "#f467a4",
          200: "#3CD3C1",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
