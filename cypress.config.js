const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },

  env: {
    EMAIL: 'dangfart@noroff.no',
    PASSWORD: 'test123456!',
  },
});
