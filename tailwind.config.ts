import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: "#573993",
          base: " #9270D7",
          light: "#DACDF4",
          lighter: "#F0EAFA",
        },
        yellow: {
          dark: "#C0A60C",
          base: " #EDD85A",
          light: "#FBEE9D",
          lighter: "#FEFBE7",
        },
        teal: {
          dark: "#2D949F",
          base: " #68D2DE",
          light: "#BEEAEF",
          lighter: "#EBF8FA",
        },
        pink: {
          dark: "#9F2D70",
          base: " #E561AF",
          light: "#F6CAE4",
          lighter: "#FBE9F4",
        },
        green: {
          dark: "#549933",
          base: " #90DA6C",
          light: "#C7EEB4",
          lighter: "#EFFAEA",
        },
        red: {
          dark: "#9F3B2D",
          base: " #9F3B2D",
          light: "#EFC4BE",
          lighter: "#FAECEB",
        },
        gray: {
          dark: "#454545",
          base: " #DBDBDB",
          light: "#EBEBEB",
          lighter: "#F9F9F9",
        },
        textColor: "#050505",
        badgeYellow: "#fbee9d",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
