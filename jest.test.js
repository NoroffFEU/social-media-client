const { add } = require('./src/js/jest');

test('expect 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});
