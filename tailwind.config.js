/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
	theme: {
		extend: {
			backgroundImage: {
				"auth-miniature": "url('/src/assets/image/auth_left_side_miniature.png')",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
