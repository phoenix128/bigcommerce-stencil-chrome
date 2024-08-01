/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
        "./public/*.html",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                108: "27rem",
                120: "30rem",
                132: "33rem",
                144: "36rem",
                156: "39rem",
                168: "42rem",
                180: "45rem",
            },
            colors: {
                foreground: "rgb(200 200 200)",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
