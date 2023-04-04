module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'indent': ['error', 2],
    'max-len': ['error', 120],
    'space-before-function-paren': ['error', 'never'],
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
    'quotes': ['error', 'single'],
  },
  overrides: [
    {
      files: '*.vue',
      rules: {
        'vue/html-closing-bracket-spacing': ['error', {
          'selfClosingTag': 'never'
        }],
        'vue/max-attributes-per-line': ['error', {
          'singleline': { 'max': 1 },
          'multiline': { 'max': 2 }
        }],
        'vue/html-self-closing': ['error', {
          'html': {
            'normal': 'never'
          }
        }],
      }
    }
  ]
}
