/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./../body/src/**/*.{vue,js,ts,jsx,tsx}",
    "./../header/src/**/*.{vue,js,ts,jsx,tsx}",
    "./../footer/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
      mono: ["Poppins", "mono"],
    },
    extend: {},
  },
  plugins: [],
};
