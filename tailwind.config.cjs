const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#537FE7',
				black: '#181823'
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem'
				}
			},
			fontFamily: {
				sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				serif: ['Montserrat', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: []
};
