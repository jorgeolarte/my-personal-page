/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      magenta: "#C621E5",
      violet: "#720CD4",
      white: "#ffffff",
      black: "#000000",
      gray: "#3a3a3a",
    },
    backgroundImage: {
      "linear-gradient": "linear-gradient(to right, var(--tw-gradient-stops))",
      "radial-gradient":
        "radial-gradient(circle at center, var(--tw-gradient-stops))",
    },
    animation: {
      rotate: "rotate 8s linear infinite",
      pulse: "beat 1s infinite",
    },
    keyframes: {
      rotate: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      beat: {
        "0%, 100%": {
          transform: "scale( .95 )",
        },
        "50%": {
          transform: "scale( 1 )",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
