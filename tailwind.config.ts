import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "br-primary": "#3F8080",
        "br-secondary": "#3B6663",
        "br-light": "#FCF6EC",
        "br-dark": "#3B6663",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        spectral: ["Spectral", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
