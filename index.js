'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:node/recommended',
    'plugin:typescript/recommended',
  ],
  rules: {
    'typescript/indent': [ 2, 2 ],
  },
};
