/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      magenta: "#C621E5",
      violet: "#720CD4",
      white: "#ffffff",
      black: "#000000",
      gray: "#3a3a3a",
    },
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
      serif: ['"Montserrat"', "serif"],
    },
    backgroundImage: {
      "linear-gradient": "linear-gradient(to top, var(--tw-gradient-stops))",
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
