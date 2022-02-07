module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: { 
              '80-screen': '80vh',   
               }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
