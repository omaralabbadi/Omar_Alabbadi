/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#0F1D32',
        },
        charcoal: {
          DEFAULT: '#1E2A3A',
          light: '#253445',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          muted: '#8B7355',
          dark: '#A68B3C',
        },
        offwhite: '#F5F0E8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 7.5vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'hero-sub': ['clamp(1.2rem, 2vw, 1.75rem)', { lineHeight: '1.6' }],
        'section': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1' }],
        'card-title': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9A84C, #E8C97A, #C9A84C)',
        'gradient-navy': 'linear-gradient(180deg, #0A1628, #1E2A3A)',
      },
    },
  },
  plugins: [],
}
