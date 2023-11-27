/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'paprika': ['Paprika'],
        'nunito': ['Nunito Sans']
      },
      backgroundImage: {
        'banner': "url('/nature.jpg')",
      }
    },
  },
  plugins: [],
}

