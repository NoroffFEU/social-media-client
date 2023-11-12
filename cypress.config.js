import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.API_USERNAME = process.env.API_USERNAME;
      config.env.API_PASSWORD = process.env.API_PASSWORD;
      config.env.API_TOKEN = process.env.API_TOKEN;
      return config;
    },
  },
});
