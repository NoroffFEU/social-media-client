import eslint from 'vite-plugin-eslint'
import { defineConfig } from "vite";
import path, {resolve} from 'path'
export default defineConfig ({
  root: 'src',

  plugin:[
    // default settings on build (i.e. fail on error)
    {
      ...eslint(),
      apply: 'build',
    },
    {

      ...eslint({
        failOnWarning:false,
        failOnError: false,
      }),
      apply: 'serve',
      enfoce: 'post'
    }
  ],
  build: {

    rollupOptions: {

    }
  },
  server: {
    hot: true,
    port: 5555,
    host: '127.0.0.1'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'src'),
    }
  }
})
