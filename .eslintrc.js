module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true,
        'cypress/globals': true
      },
      files: [
        '.eslintrc.js', '**/*.test.js', '**/*.cy.js'
      ],
      parserOptions: {
        sourceType: 'module'
      },
      plugins: ['jest', 'cypress'],
      extends: ['plugin:jest/recommended', 'plugin:cypress/recommended'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
        'cypress/no-unnecessary-waiting': 'off',
        'no-unused-vars': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
