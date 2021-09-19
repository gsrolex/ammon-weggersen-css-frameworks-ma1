module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
  },
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff00ff',
      },
    },
  },
  variants: {},
  plugins: [],
};