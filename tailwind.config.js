/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			animation: {
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: "0.5" },
					"50%": { opacity: "0.25" },
				},
			},
			backgroundImage: {
				"dot-fade": "radial-gradient(circle, rgba(253, 224, 71, 1) 30%, rgba(253, 224, 71, 0) 70%)",
			},
			boxShadow: {
				"inner-shadow-fade":
					"inset 0 0 10px rgba(63, 63, 70, 0.5), inset 0 0 4px rgba(63, 63, 70, 0.25), inset 0 0 8px rgba(63, 63, 70, 0.1)",
			},
		},
	},
	plugins: [require("tailwind-scrollbar"), require("daisyui")],
};
