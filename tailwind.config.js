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
          'red-subtle': 'rgba(225, 6, 0, 0.08)',
          void: '#FFFFFF',
          surface: '#F8FAFC',
          'surface-raised': '#FFFFFF',
          'surface-card': '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.1)',
          'border-red': 'rgba(225, 6, 0, 0.35)',
        },
        turf: {
          green: '#059669',
          'green-subtle': 'rgba(5, 150, 105, 0.15)',
        }
      },
      fontFamily: {
        anton: ['Anton', 'Impact', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
        kannada: ['"Noto Sans Kannada"', '"Noto Serif Kannada"', 'sans-serif'],
        plex: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', '"Space Grotesk"', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(227, 0, 15, 0.12) 0%, transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'breathe': 'breathe 7s ease-in-out infinite',
        'drip': 'drip 2.8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        drip: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      }
    },
  },
  plugins: [],
}
