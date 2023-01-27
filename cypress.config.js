module.exports = {
  ...(on, config) => {
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
    on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Unexpected token')) {
        expect(err.message).to.not.include('Unexpected token');
      }
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
