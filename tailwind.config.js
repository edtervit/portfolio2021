module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#62BFED",
          dark: "#3590F3",
        },
        yellow: "#fffaee",
        orange: {
          DEFAULT: "#FF4C29",
          light: "#FFB82F",
        },
        gray: "#313638",
        pink: {
          DEFAULT: "#E66CBC",
          light: "#FEA6E0",
        },
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
      width: {
        51: "calc(50% + 2px)",
      },
      boxShadow: {
        about: "-20px -20px 0px 0px rgba(0,0,0,1)",
        project: "-15px -15px 0px 0px rgba(255,255,255,0.25)",
      },
      rotate: {
        360: "360deg",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        xxs: "10rem",
      },
    },
  },
  plugins: [require("@neojp/tailwindcss-important-variant")],
};
