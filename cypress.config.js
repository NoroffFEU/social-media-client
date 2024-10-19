const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            userEmail: 'aRandomUser@noroff.no',
            userPassword: 'aVeryrandomPassword',
            API_BASE_URL: 'https://nf-api.onrender.com/api/v1',
        },
        // defaultCommandTimeout: 1000,
    },
});
