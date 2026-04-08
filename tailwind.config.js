/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        heading: ["var(--font-family-heading)", "san-serif"],
      },
    },
  },
  plugins: [],
};
