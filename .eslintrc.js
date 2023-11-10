module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true
      },
      files: [
        '.eslintrc.js', '**/*.test.js'
      ],
      parserOptions: {
        sourceType: 'module'
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
