import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ["SUIT"],
        lotte: ["seolleimcool-SemiBold"],
      },
      colors: {
        capation: "#767676",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#EA7F42",
            },
            secondary: {
              DEFAULT: "#FFC7A7",
            },
            danger: {
              DEFAULT: "#FF0000",
            },
            focus: "#000000",
          },
        },
      },
    }),
    require("tailwind-scrollbar-hide"),
  ],
};
export default config;
