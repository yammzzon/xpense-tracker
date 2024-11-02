import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        // ITO YUNG COLOR PALETTE SA CANVA
        one: "#ecf39e",
        two: "#90a955",
        three: "#4f772d",
        four: "#31572c",
        five: "#132a13",
        // ==============================

        // SIGN UP PAGE
        lightGreen: '#003F34',
        darkGreen: '#08251f',
        confirmGreen: "#1a664d",
        // ==============================

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
