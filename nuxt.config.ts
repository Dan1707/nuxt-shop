// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: [
		'shadcn-nuxt',
		'@nuxtjs/supabase',
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxt/image',
	],
	css: ['./assets/css/tailwind.css'],
	vite: {
		plugins: [tailwindcss()],
	},

	ssr: false,

	shadcn: {
		prefix: '',
		componentDir: './app/components/ui',
	},

	supabase: {
		redirect: false,
	},

	icon: {
		mode: 'css',
		cssLayer: 'base',
	},
})
