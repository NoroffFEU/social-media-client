const js = require('@eslint/js');
const cypress = require('eslint-plugin-cypress');
const react = require('eslint-plugin-react');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        cy: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        context: 'readonly',
        fetch: 'readonly',  
        location: 'readonly', 
        expect: 'readonly', 
        Cypress: 'readonly', 
        URL: 'readonly', 
        FormData: 'readonly', 
        alert: 'readonly', 
        localStorage: 'readonly', 
        Image: 'readonly', 
        jest: 'readonly', 
        URLSearchParams: 'readonly', 
        module: 'readonly', 
        require: 'readonly', 
        setTimeout: 'readonly', 
        sessionStorage: 'readonly', 
        reject: 'readonly', 
        $button: 'readonly', 
        error: 'readonly', 
        assert: 'readonly', 
       
      
      },
    },
    plugins: {
      cypress,  // Enable the Cypress plugin
      react,    // Enable the React plugin
    },
    rules: {
      'cypress/no-assigning-return-values': 'warn', // Example rule from Cypress
      'react/react-in-jsx-scope': 'off', // Example rule from React
      'indent': ['error', 2], // Set indent to 2 spaces, with severity 'error'
      'max-len': ['warn', { code: 120 }], // Set max line length to 120, with severity 'warn'
    },
  },
  // Add the overrides section to ignore specific rules
  {
    files: [
      'babel.config.js',
      'cypress.config.js',
      'e2e/**/*.cy.js',  // All Cypress test files
      'script.js',
      'src/js/api/**/*.js',
      'src/js/listeners/**/*.js',
      'src/js/router/**/*.js',
      'src/js/storage/**/*.js',
      'src/js/templates/**/*.js',
    ],
    rules: {
      // Specify the rules you want to ignore
      'no-console': 'off', // Ignore console statements
      'no-unused-vars': 'off', // Ignore unused variables
      'eqeqeq': 'off', // Ignore strict equality checks
      // Add more rules to ignore as needed
    },
  },
];
