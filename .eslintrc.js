module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  plugins: ['wdio'],
  extends: 'plugin:wdio/recommended',
};
