/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter',  'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        'curious-blue': {
          50:  '#f0f9ff',
          100: '#dff2ff',
          200: '#b8e7ff',
          300: '#79d5ff',
          400: '#32c1fe',
          500: '#079ada',
          600: '#0089cd',
          700: '#006ca6',
          800: '#035b89',
          900: '#094c71',
          950: '#06304b',
        },
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'spin-slow':  'spin 20s linear infinite',
        'border-glow':'border-glow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'border-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(7,154,218,0.3), inset 0 0 5px rgba(7,154,218,0.05)' },
          '50%':      { boxShadow: '0 0 20px rgba(7,154,218,0.6), inset 0 0 10px rgba(7,154,218,0.1)' },
        },
      },
      boxShadow: {
        'neon':        '0 0 20px rgba(7,154,218,0.5), 0 0 60px rgba(7,154,218,0.15)',
        'neon-sm':     '0 0 10px rgba(7,154,218,0.4)',
        'neon-lg':     '0 0 40px rgba(7,154,218,0.5), 0 0 80px rgba(7,154,218,0.2)',
        'neon-violet': '0 0 20px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.15)',
        'card':        '0 4px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)',
        'card-hover':  '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(7,154,218,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
}
