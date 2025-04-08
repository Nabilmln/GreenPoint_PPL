/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // ✅ Pages Router (jika ada)
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ Komponen umum
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};