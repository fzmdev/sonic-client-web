// vite.config.cjs
const { defineConfig } = require('vite')
const { join } = require('path')
const vue = require('@vitejs/plugin-vue')

module.exports = defineConfig({
	plugins: [vue()],
    // TODO: 本地调试时需换成你的ip
	server: { host: '10.0.90.32', port: 3002 },
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString()
					}
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': join(__dirname, 'src'),
			'vue3-video-play': 'vue3-video-play/dist/index.mjs'
		}
	}
})