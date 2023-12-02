/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				purple: {
					100: "#F1F1F9",
					400: "#9747FF",
				},
				green: {
					400: "#047857",
				},
				yellow: {
					400: "#F59E0B",
				}
			},
			
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.3125rem',
				'2xl': '1.5rem',
				'3xl': '1.75rem',
				'4xl': '2.5rem',
				'5xl': '4rem'
			},
			letterSpacing: {
				snug: "-.01em"
			},
		}
	},
};
