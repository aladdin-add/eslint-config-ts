'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:node/recommended',
  ],
  plugins: [ 'node' ],
  overrides: [
    {
      files: [ '**/*.ts' ],
      parserOptions: {
        sourceType: 'module',
      },
      parser: 'typescript-eslint-parser',
      rules: {
        'node/no-unsupported-features/es-builtins': 0,
        'node/no-unsupported-features/es-syntax': 0,
      },
    },

    // TODO: overrides: *.jsx
    // https://github.com/eslint/eslint/issues/10609
  ],
};
