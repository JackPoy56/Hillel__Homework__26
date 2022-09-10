module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-cycle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'object-shorthand': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'object-curly-newline': 'off',
    'linebreak-style': 'off',
    'indent': 'off',
    'quote-props': 'off',
    'arrow-body-style': 'off',
    'no-useless-return': 'off',
    'no-else-return': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-restricted-globals': 'off',
  },
};
