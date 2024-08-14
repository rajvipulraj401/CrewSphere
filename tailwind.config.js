/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'avant-light': ['ITC Avant Garde Gothic Std Light', 'sans-serif'],
        'avant-med': ['ITC Avant Garde Gothic Std Medium', 'sans-serif'],
        'avant-bold': ['ITC Avant Garde Gothic Std Bold', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif'],
      },
      screens: {
        " xs": "400px",
      },
      backgroundImage: {
        'custom-pink-gradient': 'radial-gradient(circle, #E9BFD7 0%, rgba(233, 191, 215, 0.1) 70%, rgba(233, 191, 215, 0) 100%)',
      },
      keyframes: {
        bounce10px: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      animation: {
        bounce10px: 'bounce10px 2s infinite',
      },
      boxShadow: {
        'custom-bottom': '0 10px 20px -10px rgba(0, 0, 0, 0.75)', 
         },
    },
  },
  plugins: [],
};
