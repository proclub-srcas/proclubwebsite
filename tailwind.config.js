module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0d0c13',
        // primary:"#f638dc",
        // secondary:"#ffc300",
        primary : "#010101",
        secondary : "#f8b607",
        green:"#007F00",
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway : ['Raleway', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
