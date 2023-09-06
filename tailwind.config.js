/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-5px) rotate(-10deg)",
          },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px) rotate(10deg)" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
      colors: {
        primary: {
          50: "#fef2f2",
          100: "#fde3e3",
          200: "#fdcbcb",
          300: "#faa7a7",
          400: "#f57474",
          500: "#eb4848",
          600: "#d82a2a",
          700: "#b21f1f",
          800: "#961e1e",
          900: "#7d1f1f",
          950: "#440b0b",
        },
        secondary: {
          50: "#fffaeb",
          100: "#fef1c7",
          200: "#fee389",
          300: "#fecd4b",
          400: "#fdbb2d",
          500: "#f79609",
          600: "#db6f04",
          700: "#b64c07",
          800: "#933b0d",
          900: "#79310e",
          950: "#461702",
        },
        tertiary: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#c0d7fd",
          300: "#94bffc",
          400: "#629cf8",
          500: "#3d77f4",
          600: "#2759e9",
          700: "#1f44d6",
          800: "#1f39ae",
          900: "#20368d",
          950: "#182253",
        },
        "normal-white": "#F9F9FD",
        "normal-black": "#1E1E1E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// https://uicolors.app/edit?sv1=my-sin:50-fffaeb/100-fef1c7/200-fee389/300-fecd4b/400-fdbb2d/500-f79609/600-db6f04/700-b64c07/800-933b0d/900-79310e/950-461702;jacksons-purple:50-eff5ff/100-dbe8fe/200-c0d7fd/300-94bffc/400-629cf8/500-3d77f4/600-2759e9/700-1f44d6/800-1f39ae/900-20368d/950-182253;roof-terracotta:50-fef2f2/100-fde3e3/200-fdcbcb/300-faa7a7/400-f57474/500-eb4848/600-d82a2a/700-b21f1f/800-961e1e/900-7d1f1f/950-440b0b

// https://uicolors.app/edit?sv1=lightning-yellow:50-fffceb/100-fff6c6/200-ffeb88/300-ffdb4a/400-ffc719/500-f9a807/600-dd7f02/700-b75906/800-94440c/900-7a380d/950-461c02;pomegranate:50-fff3f1/100-ffe5e0/200-ffd0c6/300-ffaf9f/400-ff8168/500-fb5938/600-e83a17/700-c42f11/800-a12b13/900-862916/950-491106
