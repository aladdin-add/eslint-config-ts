'use strict';

const path = require('path');
const coffee = require('coffee');

describe('test/index.test.js', () => {
  const cwd = path.join(__dirname, 'fixtures/ts-app');

  describe('comma dangle', () => {
    it('should success', () => {
      return coffee.spawn('eslint', [ 'antd.ts' ], { cwd })
        // .debug()
        .expect('code', 0)
        .end();
    });
  });
});
