import { defineConfig } from 'cypress';
import './envVars';

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    //setupNodeEvents will be implemented in the future
  },
  env: {
    baseUrl: process.env.BASE_URL,
    userName: process.env.USER_NAME,
    userEmail: process.env.USER_EMAIL,
    userPassword: process.env.USER_PASSWORD,
    userWrongPassword: process.env.USER_WRONG_PASSWORD,
  },
});
