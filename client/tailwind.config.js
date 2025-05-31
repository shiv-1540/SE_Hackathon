/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#ede9fc',
          100: '#d2c7f8',
          200: '#b7a5f4',
          300: '#9c83f0',
          400: '#8161ec',
          500: '#6540e8',
          600: '#5D3FD3', // primary
          700: '#4932a6',
          800: '#36257a',
          900: '#23194d',
        },
        secondary: {
          50: '#e0f7f6',
          100: '#b3ebe8',
          200: '#80deda',
          300: '#4dd1cc',
          400: '#26c7c1',
          500: '#20B2AA', // secondary
          600: '#1ca29b',
          700: '#188f89',
          800: '#137c77',
          900: '#0b5955',
        },
        accent: {
          50: '#fff9e6',
          100: '#ffefc0',
          200: '#ffe599',
          300: '#ffdc73',
          400: '#ffd24d',
          500: '#ffc826',
          600: '#FFD700', // accent
          700: '#e6c200',
          800: '#cca900',
          900: '#b39300',
        },
        success: {
          50: '#e6f7ef',
          100: '#c1ebd8',
          200: '#97dfc0',
          300: '#6dd2a7',
          400: '#4dc695',
          500: '#34ba84',
          600: '#2eab78',
          700: '#259867',
          800: '#1c8656',
          900: '#106337',
        },
        warning: {
          50: '#fff8e6',
          100: '#ffecc0',
          200: '#ffe099',
          300: '#ffd373',
          400: '#ffc74d',
          500: '#ffbc26',
          600: '#ffab00',
          700: '#e69a00',
          800: '#cc8900',
          900: '#b37800',
        },
        error: {
          50: '#fce8e8',
          100: '#f7c5c5',
          200: '#f2a2a2',
          300: '#ed7f7f',
          400: '#e85c5c',
          500: '#e33939',
          600: '#d03333',
          700: '#b82c2c',
          800: '#a12626',
          900: '#891f1f',
        },
      },
      animation: {
        'wave': 'wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};