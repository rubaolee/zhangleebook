/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				slideFromTop: 'slideFromTop 1s ease-in-out 1'
			},
			keyframes: {
				slideFromTop: {
					'0%': { transform: 'translateY(-100%)'},
					'100%': { transform: 'translateY(0%)'}
				}
			}
		},
	},
	plugins: [],
}
