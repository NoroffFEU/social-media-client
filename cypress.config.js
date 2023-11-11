require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      (config.baseUrl = process.env.BASEURL),
        (config.env = {
          ...process.env,
          ...config.env,
        });
      return config;
    },
  },
});
