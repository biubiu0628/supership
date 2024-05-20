/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2253B",
      },
      fontFamily: {
        fira: ["FiraSans"],
      },
    },
  },
  plugins: [],
};
