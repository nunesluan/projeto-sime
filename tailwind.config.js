/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4b2e2e", // marrom escuro
        secondary: "#3a2323", // marrom ainda mais fechado
        neutral: "#8a817c", // cinza/marrom suave
        light: "#bcb8b1", // tom claro neutro
        dark: "#463f3a", // marrom acinzentado
        grayish: "#a39e97", // cinza médio
        accent: "#f1d39a", // dourado suave
        highlight: "#844545", // vinho terroso
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        p: {
          "@apply text-gray-700 text-lg leading-relaxed mb-6 text-justify": {},
        },
      });
    }),
  ],
};
