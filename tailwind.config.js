/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        'Around': '10px 10px 10px 10px rgba(0, 0, 0, 0.16)'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

