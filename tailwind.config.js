/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        200: "200% 200%",
        100: "100% 100%",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(135deg, #EE8F00, white)",
      },
    },
  },
  plugins: [],
};
