const path = require('path');

export default {
  root: path.resolve(__dirname),
  server: {
    port: 8080,
    hot: true,
    host: '127.0.0.1',
  },
};
