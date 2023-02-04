const { fontSize, fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["var(--font-archivo)", ...fontFamily.sans],
            serif: ["var(--font-lora)", ...fontFamily.serif],
            logo: ["var(--font-days-one)", ...fontFamily.sans],
            nav: ["var(--font-archivo)", ...fontFamily.sans],
            datetime: ["var(--font-quantico)", ...fontFamily.sans],
            "hero-subtitle": ["var(--font-quantico)", ...fontFamily.sans],
            "timeline-year": ["var(--font-cabin)", "sans-serif"],
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        ({ matchUtilities, theme }) => {
            matchUtilities(
                // https://codepen.io/henry/pen/WNMVVKq?editors=1010
                {
                    aspect: (value) => ({
                        "@supports (aspect-ratio: 1 / 1)": {
                            aspectRatio: value,
                        },
                        "@supports not (aspect-ratio: 1 / 1)": {
                            // https://github.com/takamoso/postcss-aspect-ratio-polyfill

                            "&::before": {
                                content: '""',
                                float: "left",
                                paddingTop: `calc(100% / (${value}))`,
                            },
                            "&::after": {
                                clear: "left",
                                content: '""',
                                display: "block",
                            },
                        },
                    }),
                },
                { values: theme("aspectRatio") }
            )
        },
    ],
}
