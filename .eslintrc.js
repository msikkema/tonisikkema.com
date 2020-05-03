module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': ['error', 80]
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};