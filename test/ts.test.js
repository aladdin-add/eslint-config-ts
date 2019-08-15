'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/ts.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/ts-app');

  describe('ts app', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ 'app.ts' ], { cwd })
        .debug()
        .expect('code', 0)
        .end();
    });
  });
});
