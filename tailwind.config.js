/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E29381',
          light: '#F5C1B5',
          dark: '#C86E5B',
        },
        secondary: {
          DEFAULT: '#A39397',
          light: '#C4B9BB',
          dark: '#7D6D70',
        },
        tertiary: {
          DEFAULT: '#E8C3A2',
          light: '#F3DEC9',
          dark: '#CC9D74',
        },
        neutral: {
          DEFAULT: '#959899',
          light: '#BEBFC0',
          dark: '#6E7071',
        },
        textDark: '#1A1A1A',
        bgLight: '#FAFAFA',
        bgGradientStart: '#FAFAFA',
        bgGradientEnd: '#F3F4F6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        glass: '0 8px 32px 0 rgba(149, 152, 153, 0.15)',
        tilted: '15px 15px 35px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
