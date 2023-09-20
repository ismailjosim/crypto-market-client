export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f7931a",

          "secondary": "#61CE70",

          "accent": "#263A49",

          "neutral": "#777777",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#ee0a24",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
