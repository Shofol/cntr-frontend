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
        "br-brown": "#363636",
        "br-green": "#1E8080",
        "br-sage": "#C6DCDA",
        "br-red": "#BE5B56",
        "br-dark-red": "#875362",
        "br-orange": "#E8B4A4;",
        "br-bgreen": "#1B9C9C",
        "br-lbgreen": "#F2FFFF",
        "br-pink": "#7E1153",
        "br-lpink": "#FFF2FA",
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
