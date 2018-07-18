'use strict';

const base = [
  'eslint:recommended',
  require.resolve('./lib/legacy'),
  require.resolve('./lib/rules/es6'),
  require.resolve('./lib/rules/es8'),
  require.resolve('./lib/rules/es9'),
];

module.exports = {
  extends: base,
};
