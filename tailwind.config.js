/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(-45deg, #22223d, #1c1c29, #1c1c29, #22223d)",
        "light-gradient-bg":
          "linear-gradient(312deg, rgba(187,244,245,1) 6%, rgba(235,255,255,1) 26%, rgba(215,255,255,1) 51%, rgba(212,254,255,1) 88%, rgba(246,255,155,1) 100%)",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
