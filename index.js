'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:node/recommended',
  ],
  plugins: [ 'typescript' ],
  overrides: [
    {
      files: [ '**/*.ts' ],
      parserOptions: {
        sourceType: 'module',
      },
      parser: 'typescript-eslint-parser',
      rules: {
        // no need to enable in *.ts
        'node/no-unsupported-features/es-syntax': 'off',

        // // typescript-specific rules:
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        'typescript/member-delimiter-style': 'error',
        'typescript/member-ordering': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-array-constructor': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/no-inferrable-types': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-non-null-assertion': 'error',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-unused-vars': 'error',
        'typescript/no-use-before-define': 'error',
        'typescript/no-var-requires': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/type-annotation-spacing': 'error',

        // https://github.com/eslint/typescript-eslint-parser#known-issues
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },

    // TODO: overrides: *.jsx
    // https://github.com/eslint/eslint/issues/10609
  ],
};
