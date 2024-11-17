/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "color-green": "var(--color-green)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
