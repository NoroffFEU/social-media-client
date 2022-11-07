require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: "http://127.0.0.1:8080",
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
