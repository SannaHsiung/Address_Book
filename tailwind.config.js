/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
        laptop: "1560px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
