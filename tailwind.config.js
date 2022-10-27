/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e4c0f7",

          secondary: "#f7091d",

          accent: "#eaa4b6",

          neutral: "#29192A",

          "base-100": "#F0EBF5",

          info: "#5373F3",

          success: "#64DD91",

          warning: "#AB8C12",

          error: "#EB3348",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
