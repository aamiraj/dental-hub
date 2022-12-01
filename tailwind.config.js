/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2EC4B6",

          secondary: "#FFBF69",

          accent: "#445566",

          neutral: "#211B22",

          "base-100": "#FFFFFF",

          info: "#8CB8EE",

          success: "#1C7D51",

          warning: "#F6A10E",

          error: "#EE1C11",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
