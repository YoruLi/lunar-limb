import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';




export const locales = {
	root: { label: 'Español', lang: 'es' },
	en: { label: 'English', lang: 'en' },

};



// https://astro.build/config





export default defineConfig({
	integrations: [
		starlight({
	
			locales: locales,
		
			title: 'SSDSP',
			customCss: ['/src/styles/custom.css', '/src/fonts/fonts-face.css'],
			sidebar: [
				
				{
					label: 'Comienza aquí',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Empezando', link: '/guides/example/' },
					],
				},
				{
					label: 'Creadores',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
