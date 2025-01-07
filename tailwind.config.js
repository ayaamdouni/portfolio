/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backg: "white",
        bgCard: "#64B5F6",
        titleColor: "#00538C",
        subtitleColor: "black",
        durationColor: "gray",
        pColor: "gray",
        tagColor: "#0071c5",
        skillbg: "#7CB9E8"

      }
    },
  },
  plugins: [],
}

