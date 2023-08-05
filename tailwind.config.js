module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient_1": "url('/gradient_1.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
