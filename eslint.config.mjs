import pluginJs from '@eslint/js'

export default [
  { files: ['**/*.js', '**/*.mjs'], languageOptions: { sourceType: 'module' } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
      // Add other rules as needed
    }
  }
]
