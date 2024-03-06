/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a991f7",
          "secondary": "#f6d860",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info-content": "#FF98E8",
          "info": "#32C7FF"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss/nesting')
  ],
};
