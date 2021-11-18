module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "rocket-image": "linear-gradient(to bottom,rgba(1, 2, 8, 0.616), rgba(1, 2, 8, 0.616)),url(./assets/images/wallpaper.jpg)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
