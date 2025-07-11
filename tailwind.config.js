/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'position-red': '#dc2626',
        'position-dark': '#111827',
        'position-gray': '#6b7280',
      },
      fontFamily: {
        'sans': ['Nexa', 'system-ui', 'sans-serif'],
        'nexa': ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}