/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/preline/dist/*.js",
    "./src/pages/**/*.{js,ts}",
    "./src/components/**/*.{js,ts}",
    "./src/layouts/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#141414",
        black: {
          600: "#1E1E1E",
          700: "#161616",
          800: "#141414",
          900: "#000000",
        },
        green: {
          400: "#6BD67A",
        },
        yellow: {
          200: "#FFF0D2",
        },
      },
      fontFamily: {
        beliau: ["Beliau Regular", ...defaultTheme.fontFamily.sans],
        spaceGrotesk: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        initial: "initial",
        inherit: "inherit",
        unset: "unset",
      },
      letterSpacing: {
        wide: "0.015em",
        tight: "-0.03em",
      },
      spacing: {
        4.5: "18px",
        13: "52px",
        14: "54px",
        15: "56px",
        16: "60px",
        17: "64px",
        18: "68px",
        19: "72px",
        22: "86px",
        34: "136px",
        fill: "-webkit-fill-available",
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        sm: "500",
        base: "1028",
        lg: "1524",
        xl: "2028",
        primary: "9999",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "8px",
          sm: "0px",
        },
        screens: {
          xs: "423px",
          sm: "640px",
          md: "722px",
          lg: "898px",
          xl: "1166px",
          "2xl": "1155px",
        },
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),

    // Variant
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },
  ],
};
