/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      boxShadow: {
        'Around': '10px 10px 10px 10px rgba(0, 0, 0, 0.16)'
      }
    },
    animation: {
      marquee: 'marquee 10s linear infinite',
    },
    keyframes: {
      marquee: {
        '100%': { transform: 'translate(-100%, 0%)' }
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

