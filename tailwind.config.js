/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      container: {center: true ,padding: '2rem'}
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

