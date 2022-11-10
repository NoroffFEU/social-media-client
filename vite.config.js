const path = require('path');

export default {
  base: '/social-media-client/',
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 8080,
    host: true,
  },

  build: {
    outDir: './vite',
  },
};
