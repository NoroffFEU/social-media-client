import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import cypress from 'eslint-plugin-cypress';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs}'], // include both js and mjs
    ignores: ['node_modules'],
    plugins: {
      prettier,
      cypress,
      jest,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
    },
    languageOptions: {
      ecmaVersion: 'latest', // latest ECMAScript version
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        location: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        alert: 'readonly',
        localStorage: 'readonly',
        Image: 'readonly',
        cy: 'readonly', // Cypress globals
        Cypress: 'readonly',
        describe: 'readonly', // Jest globals
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        global: 'readonly',
        jest: 'readonly',
      },
    },
  },
  {
    files: ['**/*.cy.js'], // Cypress-specific
    plugins: { cypress },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
    languageOptions: {
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.js', '**/*.test.mjs'], // Jest-specific
    plugins: { jest },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        global: 'readonly',
      },
    },
  },
];
