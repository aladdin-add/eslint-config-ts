'use strict';

const base = [
  './lib/legacy',
  './lib/rules/es6',
  './lib/rules/es8',
  './lib/rules/es9',
].map(require.resolve);

module.exports = {
  extends: base,
};
