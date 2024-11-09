import globals from 'globals';
import cypress from 'eslint-plugin-cypress';
import jestPlugin from 'eslint-plugin-jest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Base configuration for general JavaScript files
  ...compat.extends('eslint:recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  {
    files: ['**/*.test.js'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.jest,
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'no-unused-vars': 'off', 
    },
  },

  {
    files: ['**/*.cy.js'],
    plugins: {
      cypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...cypress.environments.globals.globals,
      },
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off', 
    },
  },
];