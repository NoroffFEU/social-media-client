const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },
  env: {
    TEST_USER_EMAIL: "toreid21750@stud.noroff.no",
    TEST_USER_PASSWORD: "Password1"
  }
});
