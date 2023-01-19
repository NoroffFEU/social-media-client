module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'prettier',
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { jest: true },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
