const cypress = require('cypress');

module.exports = {
  ...(_on, config) => {
    config.baseUrl = 'http://127.0.0.1:8080/';
    config.testFiles = '**/*.e2e.js';
    config.env.apiKey = 'abc123';
    config.env.users = {
      admin: {
        username: 'admin',
        password: 'password',
      },
      user: {
        username: 'user',
        password: 'password',
      },
    };
    config.modifyObstructiveCode = true;

    return config;
  },

  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
};
