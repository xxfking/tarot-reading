import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        surface: "#F5F5F4",
        text: {
          primary: "#1C1917",
          secondary: "#57534E",
          tertiary: "#78716C",
        },
        accent: {
          DEFAULT: "#0058A3",
          yellow: "#FFDA1A",
          blue: "#0058A3",
          purple: "#6366F1",
          indigo: "#4F46E5",
          gold: "#D4AF37",
        },
        border: "#E7E5E4",
        mystic: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          500: "#A855F7",
          600: "#9333EA",
          900: "#581C87",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.75', letterSpacing: '0.005em' }],
        'lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0em' }],
        'xl': ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.65', letterSpacing: '-0.015em' }],
        '3xl': ['1.875rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        '5xl': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
      },
      spacing: {
        base: "8px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.12), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
        'mystic': '0 0 20px rgba(99, 102, 241, 0.15), 0 4px 6px -1px rgb(0 0 0 / 0.08)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.2)',
        'inner-glow': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'drift': 'drift 8s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-15px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-ikea': 'linear-gradient(135deg, #0058A3 0%, #006BB8 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #FFDA1A 0%, #FFE44D 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #FAFAF9 0%, #F5F5F4 100%)',
        'gradient-mystic': 'linear-gradient(135deg, #4F46E5 0%, #6366F1 50%, #A855F7 100%)',
        'gradient-celestial': 'linear-gradient(to bottom, #FAFAF9 0%, #F3E8FF 50%, #E9D5FF 100%)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
} satisfies Config;
