import { fileURLToPath } from 'url';
import TailwindTypography from '@tailwindcss/typography';
import TailwindBootstrapGrid from 'tailwind-bootstrap-grid';
const componentsDir = fileURLToPath(new URL('./components', import.meta.url));

export default {
	content: [`${componentsDir}/**/**/*.{tsx,js,jsx,html,css}`],
	theme: {
		extend: {
			colors: {
				slate: {
					300: '#d1cfcb',
					700: '#777777',
				},
				grey: {
					50: '#ebebeb',
					100: '#EEEBE9',
					200: '#F0EEEC',
					300: '#eaeaea',
					400: '#B7B7B7',
					500: '#adadad',
					600: '#808080',
					800: '#373a3c',
					900: '#343434',
				},
				sky: {
					400: '#C0CDE2',
					500: '#7C93B7',
					600: '#5E7AA2'
				},
				orange: {
					400: '#DA9D27',
					500: '#F69300',
				},
				brown: {
					300: '#59514A',
					400: '#673731',
					500: '#3E3023',
					600: '#2F251D',
					700: '#3B342E',
				},
				red: {
					500: '#D34C29',
					600: '#CD4425',
				},
				ice: {
					500: '#4B83A8',
				},
				green: {
					300: '#A3C3BD',
					400: '#89ceb9',
					500: '#24695A',
					600: '#32675c'
				},
				purple: {
					500: '#98288D',
				},
			},
			fontFamily: {
				'sans': ['Gilroy'],
				'sofa': ['Sofa Sans Mono'],
				'sofa-highlight': ['Sofa Sans BkLine'],
				'magenta': ['Magenta'],
				'sofa-sans': ['Sofa Sans'],
				'born-ready': ['Born Ready'],
			},
			typography: ({ theme }) => ({
				black: {
					css: {
						'--tw-prose-counters': "#000",
						'--tw-prose-bullets': "#000",
					},
				},
				white: {
					css: {
						'--tw-prose-body': "#fff",
						'--tw-prose-bold': "#fff",
						'--tw-prose-headings': "#fff",
						'--tw-prose-counters': "#fff",
						'--tw-prose-bullets': "#fff",
					},
				},
			}),
		},
	},
	plugins: [
		TailwindTypography,
		TailwindBootstrapGrid({
			generateContainer: false,
		})
	],
}
