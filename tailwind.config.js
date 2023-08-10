/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        colors: {
            primary: {
                50: "#b3e6fa",
                100: "#99def8",
                200: "#80d6f7",
                300: "#66cef5",
                400: "#4dc6f3",
                500: "#33bdf1",
                600: "#1ab5f0",
                700: "#00adee",
                800: "#009cd6",
                900: "#008abe",
                950: "#0079a7",
            },
        },

        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
