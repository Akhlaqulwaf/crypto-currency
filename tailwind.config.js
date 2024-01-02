/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'four': "16fr 20fr 20fr 20fr"
      }
    },
  },
  plugins: [],
}

