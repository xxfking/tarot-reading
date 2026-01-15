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
        background: "#FFFFFF",
        surface: "#FAFAFA",
        text: {
          primary: "#2A2A2A",
          secondary: "#757575",
        },
        accent: {
          DEFAULT: "#6B7AA1",
          warm: "#C4A786",
          cool: "#8B9DC3",
        },
        border: "#E8E8E8",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        serif: ["Crimson Text", "Georgia", "serif"],
        sans: ["Outfit", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      spacing: {
        base: "8px",
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mist': 'linear-gradient(135deg, #6B7AA1 0%, #8B9DC3 100%)',
        'gradient-warm': 'linear-gradient(135deg, #C4A786 0%, #D4B896 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #FFFFFF 0%, #FAFAFA 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
