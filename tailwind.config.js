import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.vitepress/theme/**/*.{vue,js,ts}",
    "./content/**/*.md",
    "./**/*.md"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // nStudio brand colors
        'nstudio-orange': '#F75930',
        'nstudio-navy': '#212453',
        'nstudio-blue': '#3B82F6',
        'nstudio-cyan': '#06B6D4',
        'nstudio-emerald': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw': 'draw 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        draw: {
          '0%': { strokeDasharray: '0, 1000' },
          '100%': { strokeDasharray: '1000, 0' },
        },
      },
    },
  },
  plugins: [tailwindTypography],
};
