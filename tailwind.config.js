module.exports = {
  content: [
    "./_site/**/*.html",
    "./**/*.html",
    "./**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}