import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      outDir: 'docs',
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'YZhanNotify',
        fileName: 'yzhannotify',
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'yzhannotify.css';
            return assetInfo.name;
          },
        }
      }
    }
  }
})