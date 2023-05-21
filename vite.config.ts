import { URL } from 'url';

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {PreRenderedAsset} from "rollup";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/dit/",
    plugins: [vue()],
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
        },
    },
    server: {
        proxy: {
            '/socket.io': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true,
            },
        },
    },
})
