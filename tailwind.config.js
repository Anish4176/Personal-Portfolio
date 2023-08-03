/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Ubuntu', 'sans-serif'],
        roboto:['cursive']
       },
       colors:{
          bluish:'#050816',
          hero:'#1F2937'
       },
      backgroundImage: {
       'hero-pattern': "url('/src/assets/herobg.jpg')",
       'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}

