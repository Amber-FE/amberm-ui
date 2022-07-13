module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'always',
      { js: 'never', mjs: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'no-restricted-syntax': 'off',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off'
  }
}
