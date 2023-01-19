/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["pastel"],
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#aaa",
  //         secondary: "#f6d860",
  //         accent: "#37cdbe",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //         "--rounded-btn": "10rem",
  //       },
  //     },
  //   ]
  // },
}
