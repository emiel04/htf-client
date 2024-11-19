import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                gold: '#c1aa09',    // Gold color
                silver: '#C0C0C0',  // Silver color
                bronze: '#CD7F32',  // Bronze color
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["emerald"],
    },
};
