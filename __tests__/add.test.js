const add = require('../src/add');

test('add 1 + 1 to equal 2', () => {
  expect(add(1, 1)).toBe(2);
});
