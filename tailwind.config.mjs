/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
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
			  'h1': ['var(--primary-font)'],
			  'p': ['var(--paragraft-font)'],
			},
		  }
	},
	plugins: [
		animations
	],
}
