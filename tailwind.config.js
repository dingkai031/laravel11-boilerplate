/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fffaeb",
                    100: "#fff0c6",
                    200: "#ffdf88",
                    300: "#ffc94a",
                    400: "#ffb320",
                    500: "#f98f07",
                    600: "#dd6902",
                    700: "#b74806",
                    800: "#94360c",
                    900: "#7a2e0d",
                    950: "#461602",
                },
            },
        },
    },
    plugins: [],
};
