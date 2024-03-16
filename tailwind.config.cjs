/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const animations = import("@midudev/tailwind-animations")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			primary: "var(--primary)", 
			secundary: "var(--secundary)",
			complementary:"var(--complementary)", 
			complementOne: "var(--complementOne)", 
			complementTwo:"var(--complementTwo)", 
		},
		extend: {
			fontFamily: {
			  'h1': ['var(--primary-font)', ...defaultTheme.fontFamily.sans],
			  'p': ['var(--paragraft-font)', ...defaultTheme.fontFamily.sans],
			},
		  }
	},
	plugins: [
		animations
	],
}
