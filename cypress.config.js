import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    pageLoadTimeout: 100000,
    baseUrl: 'http://127.0.0.1:8080/',
  },
});
