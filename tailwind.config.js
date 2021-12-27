module.exports = {
  darkMode: "class",
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`
  ],
  plugins: [require("@tailwindcss/typography")],
  variants: {
    extend: {
      boxShadow: ["dark"]
    }
  },
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      serif: ["Roboto Slab", "serif"]
    },
    extend: {
      colors: {
        navy: {
          darker: "#1F2633",
          default: "#2A3950",
          lighter: "#394F6B"
        },
        coral: {
          darker: "#D97C71",
          default: "#FFB3AB"
        },
        ocean: {
          darker: "#5DA4A3",
          default: "#B4D9E0",
          lighter: "#E8FAF9",
          lightest: "#B5FFFD"
        }
      }
    }
  },
};
