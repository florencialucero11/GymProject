/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Ejemplo de colores personalizados
        "primary": "#1F2937",
        "secondary": "#4B5563"
      }
    }
  },
  plugins: [],
}

