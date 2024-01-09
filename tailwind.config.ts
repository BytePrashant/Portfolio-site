import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom1: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "trans-rotate": {
          "100%": { transform: "rotate(1turn)" },
        },
        "trans-bubble": {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            border: "3px solid #2d2e32",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
            border: "3px solid #2d2e32",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            border: "3px solid #2d2e32",
          },
        },
      },
      animation: {
        "trans-rotate": "trans-rotate 6s linear infinite",
        "trans-bubble": "trans-bubble 6s ease-in-out infinite",
      },
      screens: {
        "lg": { max: "900px" },
        "sm": { max: "500px" },
      },
    },
  },
  plugins: [],
};
export default config;
