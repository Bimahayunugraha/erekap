/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "#14b8a6",
				secondary: "#64748b",
				dark: "#0f172a",
			},
			screens: {
				"2xl": "1320px",
			},
			backgroundImage: {
				bgHero: "url('./src/assets/img/png/bg-hero.jpg')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
