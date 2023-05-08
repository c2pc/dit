import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {PreRenderedAsset} from "rollup";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/dit/",
    plugins: [vue()],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
