
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'920': '920px',
				'107': '107px',
				'90': '90%',
				'50': '50px'
			},
			colors: {
				'blue': 'blue',
				'green': '#0c6',
				'light': '#eee',
				'dark': '#444',
				'over': '#0c9'
			}
		}
	},
	plugins: [
		plugin(function({addComponents}) {
			addComponents({
				'.font-20': {font: '20px arial'}
			})
		})
	]
}
