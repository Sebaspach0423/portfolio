/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter',          'sans-serif'],
        display: ['Space Grotesk',  'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Paleta principal — emerald neon (reemplaza curious-blue)
        'curious-blue': {
          50:  '#f0fdf6',
          100: '#dcfcec',
          200: '#adf7d0',
          300: '#6ef2b3',
          400: '#34e89c',
          500: '#00d68f',   // brand principal
          600: '#00b876',
          700: '#00955e',
          800: '#007548',
          900: '#005c39',
          950: '#003924',
        },
        electric: {
          300: '#a7f3d0',
          400: '#6ee7b7',
          500: '#00e89a',   // super bright
          600: '#00d68f',
        },
        neon: {
          green:  '#00e89a',
          emerald:'#00d68f',
          violet: '#a855f7',
          purple: '#8b5cf6',
        },
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 10s ease-in-out infinite',
        'glow-pulse':  'glow-pulse 3s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'spin-slow':   'spin 25s linear infinite',
        'border-glow': 'border-glow 4s ease-in-out infinite',
        'scan':        'scan 6s linear infinite',
        'drift':       'drift 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'border-glow': {
          '0%, 100%': { boxShadow: '0 0 6px rgba(0,214,143,0.3)' },
          '50%':      { boxShadow: '0 0 28px rgba(0,214,143,0.75)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(110vh)' },
        },
        drift: {
          '0%':   { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%':  { transform: 'translate(35px, -25px) rotate(4deg)' },
          '66%':  { transform: 'translate(-20px, 15px) rotate(-3deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
        },
      },
      boxShadow: {
        'neon':        '0 0 28px rgba(0,214,143,0.6), 0 0 80px rgba(0,214,143,0.2)',
        'neon-sm':     '0 0 14px rgba(0,214,143,0.5)',
        'neon-lg':     '0 0 55px rgba(0,214,143,0.65), 0 0 110px rgba(0,214,143,0.22)',
        'neon-violet': '0 0 28px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.2)',
        'card':        '0 8px 40px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)',
        'card-hover':  '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,214,143,0.3), inset 0 1px 0 rgba(255,255,255,0.09)',
        'float':       '0 24px 64px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
}
