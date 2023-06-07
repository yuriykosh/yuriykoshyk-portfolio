/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
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
