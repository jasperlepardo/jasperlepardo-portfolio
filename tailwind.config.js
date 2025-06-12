// tailwind.config.js
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_posts/**/*.md",
    "./works/**/*.html",
    "./*.html"
  ],
  theme: { extend: {} },
  plugins: [ require("@tailwindcss/typography") ]
};