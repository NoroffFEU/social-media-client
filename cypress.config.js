import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    //setupNodeEvents will be implemented in the future
  },
  env: {
    baseUrl: 'http://localhost:5501',
    userName: 'ThoJen84480',
    userEmail: 'ThoJen84480@stud.noroff.no',
    userPassword: '!Yzems224',
    userWrongPassword: '!Yzems225',
  },
});
