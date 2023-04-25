/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        327: "20.4375rem",
        339: "21.1875rem",
        351: "21.9375rem",
        689: "43.0625rem",
        1110: "69.375rem",
      },
      colors: {
        violet: "#5964E0",
        lightViolet: "#939bf4",
        darkBlue: "#19202D",
        midnight: "#121721",
        lightGray: "#F4F6F8",
        gray: "#9DAEC2",
        darkGray: "#6E8098",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/desktop/bg-pattern-header.svg')",
        "hero-pattern-tablet": "url('/assets/tablet/bg-pattern-header.svg')",
        "hero-pattern-mobile": "url('/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
