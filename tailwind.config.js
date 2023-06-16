/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        fox: {
          100: "#fbe1d8",
          200: "#f7c3b2",
          300: "#f4a48b",
          400: "#f08665",
          500: "#ec683e",
          600: "#bd5332",
          700: "#8e3e25",
          800: "#5e2a19",
          900: "#2f150c",
        },
        whale: {
          100: "#dde4f2",
          200: "#bbc8e5",
          300: "#9aadd9",
          400: "#7891cc",
          500: "#5676bf",
          600: "#455e99",
          700: "#344773",
          800: "#222f4c",
          900: "#111826",
        },
      },
      fontSize: {
        // BODY
        bodyS: [
          "7px",
          {
            lineHeight: "10px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        bodyL: [
          "14px",
          {
            lineHeight: "21px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        // SUBTITLE
        subtitle: [
          "12px",
          {
            lineHeight: "14px",
            letterSpacing: "0.007em",
            fontWeight: "400",
          },
        ],
        // H4
        h4XS: [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.007em",
            fontWeight: "400",
          },
        ],
        h4S: [
          "24px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.007em",
            fontWeight: "400",
          },
        ],
        h4L: [
          "36px",
          {
            lineHeight: "42px",
            letterSpacing: "-0.007em",
            fontWeight: "400",
          },
        ],
        // H3
        h3S: [
          "36px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        h3L: [
          "72px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        // H2
        h2S: [
          "48px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.08em",
            fontWeight: "400",
          },
        ],
        h2L: [
          "144px",
          {
            lineHeight: "144px",
            letterSpacing: "-0.08em",
            fontWeight: "400",
          },
        ],
        // H1
        h1XS: [
          "120px",
          {
            lineHeight: "120px",
            letterSpacing: "-0.075em",
            fontWeight: "700",
          },
        ],
        h1S: [
          "150px",
          {
            lineHeight: "150px",
            letterSpacing: "-0.075em",
            fontWeight: "700",
          },
        ],
        h1L: [
          "220px",
          {
            lineHeight: "220px",
            letterSpacing: "-0.075em",
            fontWeight: "700",
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
