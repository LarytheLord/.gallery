/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: 'hsl(var(--primary))',
          'primary-dark': 'hsl(var(--primary-dark))',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }