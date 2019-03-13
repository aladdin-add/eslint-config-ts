'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/indent': [ 2, 2 ],
    '@typescript-eslint/no-use-before-define': [ 2, { functions: false }],
  },
};
