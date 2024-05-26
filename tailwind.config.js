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
      marquee: 'marquee 30s linear infinite',
      marquee2: 'marquee2 30s linear infinite'
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' }
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' }
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

