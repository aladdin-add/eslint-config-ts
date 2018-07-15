'use strict';

module.exports = {
  extends: [
    './lib/legacy',
    './lib/rules/es6',
    './lib/rules/es8',
    './lib/rules/browser',
    './lib/rules/import',
    './lib/rules/react',
    './lib/rules/react-a11y',
  ].map(require.resolve),
  parser: 'babel-eslint',
  rules: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
