const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				outfit: ['Outfit', ...defaultTheme.fontFamily.sans]
			},
			transitionProperty: {
				'grid-rows': 'grid-template-rows'
			},
			gridTemplateRows: {
				'0fr': '0fr',
				'1fr': '1fr',
			}
		},
	},
	plugins: [],
}
