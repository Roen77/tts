module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'jest',
    'cypress'
  ],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'no-trailing-spaces': 'off',
    'nuxt/no-cjs-in-config': 'off'
  }
}
