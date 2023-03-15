/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Light-red": "hsl(0, 100%, 67%)",
        "Light-red-transparent":"#FFF6F5",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Orange-yellow-transparent":"#FFFBF2", 
        "Green-teal": "hsl(166, 100%, 37%)",
        "Green-teal-transparent":"#F2FBFA",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Cobalt-blue-transparent":"#F3F3FD",
        "Light-slate-blue-background": "hsl(252, 100%, 67%)",
        "Light-royal-blue-background": "hsl(241, 81%, 54%)",
        "Violet-blue-circle": "hsla(256, 72%, 46%, 1)",
        "Persian-blue-circle": "hsla(241, 72%, 46%, 0)",
        "White": "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)"
      },
      fontFamily:{
        "ff-Hanken-Grotesk":'Hanken Grotesk'
      }
    },
  },
  plugins: [],
}
