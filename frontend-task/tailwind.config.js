/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-linear': 'linear-gradient(59deg, rgba(255,110,82,1) 0%, rgba(209,8,44,1) 71%)',
        'custom-linear-2': 'linear-gradient(180deg, rgba(219, 59, 59, 0.3) 0%, rgba(219, 59, 59, 0.126) 100%)',
        'custom-linear-3': 'linear-gradient(90deg, #FFBA52 0%, #D1082C 100%)',
        'couple': 'url("/src/assets/couple.png")'

      },
      textColor: {
        'custom-linear-3': 'linear-gradient(90deg, #FFBA52 0%, #D1082C 100%)',

      },

    },
    plugins: [],
  }
}