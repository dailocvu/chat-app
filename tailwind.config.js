/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#D6D9F3",
        sidebarhover: "#E3E6FA",
        chat: "#F9F8FD",
        message: "#E9E8ED",
        mymessage: "#2A8CF1",
      },
      spacing: {
        chatlist: "450px",
        17: "70px",
        21: "85px",
      },
      dropShadow: {
        send: ["0 35px 35px #74B3F6", "0 45px 65px #74B3F6)"],
      },
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
