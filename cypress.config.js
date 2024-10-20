const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 2000; // Set the timeout to 20 sec
      return config;
    },
  },
});
