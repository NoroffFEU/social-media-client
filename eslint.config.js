import jestPlugin from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    rules: {
      // Global rules if needed
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
];
