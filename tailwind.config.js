module.exports = {
  content: ["./public/index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#fb923c",
        second: "rgb(38 38 38)",
        third: "#4b5563",
      },
      backgroundImage: {
        hero: "url('./assets/SeifNageh.png')",
      },
      animation: {
        "spin-slow": "goUpSpin 15s linear infinite",
        "fade-in": "fadeIn 1s linear",
        "fade-out": "fadeOut 0.5s linear",
      },
      minWidth: {
        "1/3": "33%",
      },
      keyframes: {
        goUpSpin: {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(-1500px) rotate(600deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
