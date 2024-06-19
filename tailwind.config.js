/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "headertext" : "rgb(110 110 116)",
        "navbgcolor" : "rgb(216, 234, 255)",
        "navbgmaincolor" : "rgb(40, 123, 220)",
        "buttoncolorgold" : "#f29d1e",
        "navbarcolor" : "rgb(39, 37, 37)"
      },
      screens : {
        xl : {
          "max": "980px"
        },
        md : {
          "max": "767px"
        },
        sm : {
          "max": "639px"
        }
      }
    
    },
   
  },
  plugins: [],
}