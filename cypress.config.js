import { defineConfig } from "cypress";

import "dotenv/config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    INVALID_EMAIL: process.env.INVALID_EMAIL,
  },
});
