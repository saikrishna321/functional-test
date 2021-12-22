module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: [
    'wdio',
    'chai-friendly'
  ],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:wdio/recommended',
    'plugin:mocha/recommended',
    'plugin:chai-friendly/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'mocha/no-skipped-tests': 'error',
    'mocha/no-exclusive-tests': 'error',
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  settings: {
    'mocha/additionalCustomNames': [
      { name: 'describeModule', type: 'suite', interfaces: ['BDD'] },
      { name: 'testModule', type: 'testCase', interfaces: ['TDD'] }
    ]
  }
}
