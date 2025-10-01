/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,html}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Ocean Theme
        'ocean-primary': '#0ea5e9',
        'ocean-secondary': '#06b6d4',
        'ocean-accent': '#3b82f6',
        'ocean-dark': '#0c4a6e',
        
        // Sunset Theme
        'sunset-primary': '#f97316',
        'sunset-secondary': '#ec4899',
        'sunset-accent': '#8b5cf6',
        'sunset-dark': '#7c2d12',
        
        // Forest Theme
        'forest-primary': '#10b981',
        'forest-secondary': '#059669',
        'forest-accent': '#84cc16',
        'forest-dark': '#064e3b',
        
        'dark-bg': '#0f0f23',
        'dark-card': '#1a1a2e',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'glow-ocean': 'glowOcean 2s ease-in-out infinite alternate',
        'glow-sunset': 'glowSunset 2s ease-in-out infinite alternate',
        'glow-forest': 'glowForest 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        glowOcean: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8), 0 0 40px rgba(6, 182, 212, 0.3)' },
        },
        glowSunset: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.8), 0 0 40px rgba(236, 72, 153, 0.3)' },
        },
        glowForest: {
          '0%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.8), 0 0 40px rgba(132, 204, 22, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}