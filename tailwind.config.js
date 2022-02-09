module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: { 
              '80-screen': '80vh',  
              '55-screen': '55vh', 
               }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
