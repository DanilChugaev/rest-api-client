module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  ignorePatterns: [
    '.output/*',
    'dist/*',
  ],
  rules: {
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    "object-curly-spacing": ["error", "always"]
  }
}
