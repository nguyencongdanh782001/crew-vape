module.exports = {
  content: [],
  theme: {
    extend: {
      flexgrow: {
        2: 2,
        3: 3,
      },
      keyframes: {
        hideHeader: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "50%": {
            opacity: "0.1",
          },
          "100%": {
            transform: "translateY(-74px)",
            opacity: "0",
          },
        },

        showHeader: {
          "0%": {
            transform: "translateY(-74px)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.75",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        showMenuMobile: {
          "0%": {
            transform: "translateX(-100vw)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },

        hideMenuMobile: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100vw)",
            opacity: "0",
            display: "none",
          },
        },

        showDropMenu: {
          "0%": {
            opacity: "0",
            transform: " scaleY(0)",
            height: "0",
          },

          "100%": {
            opacity: "1",
            transform: " scaleY(1)",
            height: "275px",
          },
        },

        hideDropMenu: {
          "0%": {
            opacity: "1",
            transform: "scaleY(1)",
            height: "275px",
          },

          "100%": {
            opacity: "0",
            transform: "scaleY(0)",
            height: "0",
          },
        },
      },
      animation: {
        hideHeader: "hideHeader 0.5s ease forwards",
        showHeader: "showHeader 0.5s ease forwards",
        showMenuMobile: "showMenuMobile 0.5s ease forwards",
        hideMenuMobile: "hideMenuMobile 0.5s ease forwards",
        showDropMenu: "showDropMenu 400ms ease forwards",
        hideDropMenu: "hideDropMenu 400ms ease forwards",
      },
    },
  },
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
