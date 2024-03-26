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
    },
  },
  {
    files: ['**/*.test.js'],
    extends: ['plugin:jest/recommended'],
  },
];
