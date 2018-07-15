# eslint-config-ts

Node Style Guide for Typescript.

## Install

```bash
$ npm i eslint eslint-config-ts typescript -D
```

## Usage

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-ts',
};
```

### Use with Experimental Features

If you want to use eslint-config-ts with experimental features such as `async function`, you should use `babel-eslint` parser:

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-ts',
  // for experimental features support
  parser: 'babel-eslint',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

### Use with React in Front-End

If you want to use eslint-config-ts with react, jsx and es6 modules:

- `.eslintrc.js`

```js
module.exports = {
  extends: 'eslint-config-ts',
  // for experimental features support
  parser: 'babel-eslint',
  parserOptions: {
    // for es6 module
    sourceType: 'module',
  },
  rules: {
    // for variables in jsx
    'react/jsx-uses-vars': 'error',
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  },
};
```

## License

[MIT](LICENSE)
