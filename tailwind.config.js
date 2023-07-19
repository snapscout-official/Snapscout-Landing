/** @type {import('tailwindcss').Config} */
// Supports weights 100-900
// import "@fontsource-variable/raleway";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "calc(100vw - 40)": "calc(100vw - 5rem)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        "md-ex": "906px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: "Roboto ",
        raleway: "Raleway",
      },
    },
  },

  plugins: [],
};
