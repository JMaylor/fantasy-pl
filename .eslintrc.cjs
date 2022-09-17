/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['tailwindcss'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@antfu',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {
    'array-element-newline': [
      'error', {
        ArrayExpression: 'consistent',
        ArrayPattern: {
          minItems: 3,
        },
      },
    ],
    'array-bracket-newline': [
      'error', {
        multiline: true,
        minItems: 2,
      },
    ],
    'object-property-newline': 'error',
    'object-curly-newline': [
      'error', {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true, minProperties: 3,
        },
      },
    ],
  },
}
