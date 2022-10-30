/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#090714",
        blue: "#110E26",
      },
      fontFamily: {
        heading: ["Bebas Neue", "cursive"],
        body: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        md: "16px",
        base: "18px",
        lg: "1.125rem",
        lg2: "1.25rem",
        xl: "1.35rem",
        xxl: "1.75rem",
        xxxl: "1.875rem",
        xxxl2: "1.9rem",
        "2xl": "1.98rem",
        "2.2xl": "2.2rem",
        "3xl": "2.25rem",
        "3.2xl": "2.3rem",
        "4xl": "2.5rem",
        "4xxl": "2.813rem",
        "4.5xl": "3rem",
        "5xl": "3.438rem",
        "5.5xl": "3.125rem",
        "6xl": "5rem",
        "6.5xl": "5.625rem",
        "7xl": "6.25rem",
        "main-header": [
          "3.5rem",
          {
            letterSpacing: "1px",
          },
        ],
        "header-title": [
          "3rem",
          {
            lineHeight: 1.2,
          },
        ],
        "top-heading": [
          {
            lineHeight: "150%",
          },
        ],
        policies: [
          "40px",
          {
            lineHeight: 1.2,
          },
        ],
        // Or with a default line-height as well
      },
    },
  },
  plugins: [],
};
