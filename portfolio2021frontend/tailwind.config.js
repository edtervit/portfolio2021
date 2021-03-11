module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#62BFED",
          dark: "#3590F3",
        },
        yellow: "#fffaee",
        orange: "#F66E41",
        gray: "#313638",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        bouncy: {
          "0%": { top: "0em" },
          "40%": { top: "0em" },
          "43%": { top: "-0.6em" },
          "46%": { top: "0em" },
          "48%": { top: "-0.2em" },
          "50%": { top: "0em" },
          "100%": { top: "0em" },
        },
      },
      animation: {
        bouncy: "bouncy 10s infinite linear",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
