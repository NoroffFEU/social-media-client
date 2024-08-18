import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    // Increase the timeout to help run post.cy.js test
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 15000,
  },
  env: {
    email: process.env.email,
    password: process.env.password,
    invalidEmail: process.env.invalidEmail,
    invalidPassword: process.env.invalidPassword,
  },
});
