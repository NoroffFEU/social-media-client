import js from '@eslint/js';
import globals from 'globals';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    ignores: ['tests/**', 'cypress/**', 'cypress.config.js'], 
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser, 
        ...globals.es2021, 
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: 'error',
      curly: 'error',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-const-assign': 'error',
      'no-debugger': 'warn',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-unreachable': 'error',
      'spaced-comment': ['error', 'always'],
      'no-inline-comments': 'warn',
    },
  },
  
  {
    files: ['**/*.test.js'],
    ignores: [],
    languageOptions: {
      globals: {
        ...globals.jest, 
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      ...eslintPluginJest.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
];
 