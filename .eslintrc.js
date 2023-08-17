module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Preserving the 'node' environment you had earlier
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Add any global custom rules here
  },
  overrides: [
    {
      files: ['**/*.cy.js', '**/*.spec.js'],
      env: { 'cypress/globals': true },
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off',
        'no-unused-vars': 'off',
        'cypress/unsafe-to-chain-command': 'off',
      },
    },
    {
      files: ['**/*.test.js'],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
};
