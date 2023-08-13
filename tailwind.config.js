const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient_1": "url('/gradient_1.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
