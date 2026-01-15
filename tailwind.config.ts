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
        background: "#F5F3F0",
        surface: "#FFFFFF",
        text: {
          primary: "#2C2C2C",
          secondary: "#6B6B6B",
        },
        accent: "#8B7355",
        border: "#E0DDD9",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      spacing: {
        base: "8px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
