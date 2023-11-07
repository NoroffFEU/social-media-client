module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.cy.js'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off',
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.test.js'],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
