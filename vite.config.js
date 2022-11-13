const path = require('path');

export default {
  root: path.resolve(__dirname, ''),
  server: {
    port: 5173,
    hot: true,
    host: '127.0.0.1',
  },
};
