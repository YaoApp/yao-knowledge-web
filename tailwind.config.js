/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('/space-bg.jpg')",
        hacker: "url('/hacker-bg.jpg')",
      },
    },
  },
  plugins: [],
};
