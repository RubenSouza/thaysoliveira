/* eslint-disable no-undef */

import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
