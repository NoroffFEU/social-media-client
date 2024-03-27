import js from '@eslint/js';
export default [
  js.configs.recommended,
  {
    rules: {
      semi: ['warn', 'always'],
      'no-console': 'warn',
      'no-alert': 'warn',
      'dot-notation': 'error',
      'prefer-const': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'warn',
    },
  },
  {
    plugins: ['cypress'],
    files: ['./cypress/**/*.js'],
    rules: {
      'cypress/no-unnesessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    plugins: ['jest'],
    files: ['./src/unit-tests/**/*.test.js'],
    rules: {
      'jest/prefer-expect-assertions': 'off',
    },
  },
];
