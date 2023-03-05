require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
    },
  },
});
