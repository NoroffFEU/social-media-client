require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    video: false,
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: "http://127.0.0.1:5500/",
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
