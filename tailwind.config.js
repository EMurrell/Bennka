module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
      serif: ["Georgia"],
      hand: ["Kaushan Script"],
    },
    extend: {
      backgroundImage: {
        hero: "url('/fb2-crop2.jpg')",
        quote: "url('/fb3-crop.jpg')",
      },
      colors: {
        highlight1: "#16A34A",
        highlight2: "#45433e",
      },
    },
  },
  plugins: [],
};
