/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'nav-color': '#303642',
        'nav-hover': '#F5ECE5',
        'hero-color': '#F5ECE5',
        'hero-text': '#3C4765',
        'hero-hover': '#252b3e',
        'showcase-color': '#E5EAF5',
        'face-text': '#009DDA',
        'success-color': '#EBF7FC',
        'news-color': '#F2F2F2',
      },
    },
  },
  plugins: [require('daisyui')],
};
