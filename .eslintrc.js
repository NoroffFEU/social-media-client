module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'prettier',
  overrides: [
    {
      files: ['**/*.test.js', 'src/js/helpers/**/*.js'],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
        'no-global-assign': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.cy.js'],
      env: { 'cypress/globals': true },
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
