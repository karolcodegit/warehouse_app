/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'minfull': 'calc(100vh - 120px)',
      },
      gridTemplateColumns: {
        // Definiowanie niestandardowych kolumn
        'custom': '0.683761fr 2.17949fr 0.136752fr',
      }
    },
  },
  plugins: [],
}