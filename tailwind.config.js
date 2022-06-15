/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          "primary": "#151925",
          "secondary": "#FFB600",
          "accent": "#EBE7DB",
          "neutral": "#202537",
          "base-100": "#141825",
          "info": "#9EB9EA",
          "success": "#44E9AF",
          "warning": "#B07507",
          "error": "#E57161",
        },
      },
    ],
  },
}
