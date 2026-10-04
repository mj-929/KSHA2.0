/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ksha: {
          red: '#E10600',
          'red-glow': 'rgba(225, 6, 0, 0.45)',
          'red-dark': '#8A0400',
          'red-subtle': 'rgba(225, 6, 0, 0.12)',
          void: '#050505',
          surface: '#0E0E0E',
          'surface-raised': '#161616',
          'surface-card': '#121212',
          border: 'rgba(255, 255, 255, 0.1)',
          'border-red': 'rgba(225, 6, 0, 0.35)',
        },
        turf: {
          green: '#10B981',
          'green-subtle': 'rgba(16, 185, 129, 0.15)',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
        kannada: ['"Noto Serif Kannada"', 'serif'],
        sans: ['"Space Grotesk"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(225, 6, 0, 0.18) 0%, transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
