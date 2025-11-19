/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        secondary: {
          DEFAULT: '#22d3ee',
          dark: '#06b6d4',
        },
        accent: '#67e8f9',
        background: {
          DEFAULT: '#ffffff', // Light mode background
          dark: '#000000', // Dark mode background
        },
        foreground: {
          DEFAULT: '#1f2937', // Light mode text
          dark: '#ffffff', // Dark mode text
        },
        muted: {
          DEFAULT: '#6b7280', // Light mode muted text
          dark: '#9ca3af', // Dark mode muted text
        },
        border: {
          DEFAULT: '#e5e7eb', // Light mode borders
          dark: '#374151', // Dark mode borders
        },
        card: {
          DEFAULT: '#f9fafb', // Light mode card background
          dark: '#111827', // Dark mode card background
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'fade-in-down': 'fadeInDown 0.8s ease forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease forwards',
        'fade-in-right': 'fadeInRight 0.8s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
