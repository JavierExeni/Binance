/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#fcd535",
        secondary: "#fef6d8",
        tertiary: "#EAECEF",
        gray: "#707A8A",
        lightgray: "#B7BDC6",
      }),
      textColor: {
        primary: "#1E2329",
        secondary: "#181a20",
        tertiary: "#474d57",
        warn: "#f0b90b",
        gray: "#707A8A",
        lightgray: "#B7BDC6",
      },
    },
    fontFamily: {
      BinancePlexRegular: ["BinancePlexRegular", "sans-serif"],
      BinancePlexSemiBold: ["BinancePlexSemiBold", "sans-serif"],
      BinancePlexMedium: ["BinancePlexMedium", "sans-serif"],
      BinancePlexBold: ["BinancePlexBold", "sans-serif"],
    },
  },
  plugins: [],
};
