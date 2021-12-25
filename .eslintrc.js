module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  plugins: ['wdio', 'chai-friendly'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:wdio/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
  settings: {
    'mocha/additionalCustomNames': [
      { name: 'describeModule', type: 'suite', interfaces: ['BDD'] },
      { name: 'testModule', type: 'testCase', interfaces: ['TDD'] },
    ],
  },
};
