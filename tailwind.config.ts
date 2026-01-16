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
        surface: "#F5F5F5",
        text: {
          primary: "#111111",
          secondary: "#484848",
        },
        accent: {
          DEFAULT: "#0058A3",
          yellow: "#FFDA1A",
          blue: "#0058A3",
        },
        border: "#DFDFDF",
      },
      fontFamily: {
        display: ["Noto Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Noto Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        sans: ["Noto Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      spacing: {
        base: "8px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
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
        'gradient-ikea': 'linear-gradient(135deg, #0058A3 0%, #006BB8 100%)',
        'gradient-yellow': 'linear-gradient(135deg, #FFDA1A 0%, #FFE44D 100%)',
        'gradient-subtle': 'linear-gradient(to bottom, #FFFFFF 0%, #F5F5F5 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
