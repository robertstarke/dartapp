module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        headline: ['Playfair Display', 'ui-serif', 'Georgia'],
        text: ['Open Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
