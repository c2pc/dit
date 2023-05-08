import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {PreRenderedAsset} from "rollup";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        outDir: './docs',
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo: PreRenderedAsset) => {
                  if (chunkInfo.name != undefined){
                    let extType = chunkInfo.name.split('.').at(1);
                    if (extType != undefined && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                      extType = 'img';
                    }
                    if (extType != undefined && /woff|woff2/i.test(extType)) {
                      extType = 'fonts';
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                  }
                  return ''
                },

                chunkFileNames: 'assets/js/[name]-[hash].js',

                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    }
})
