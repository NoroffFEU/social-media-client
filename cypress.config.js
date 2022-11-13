const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        URL: 'http://127.0.0.1:8080/',
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
