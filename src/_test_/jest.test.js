const add = (x, y) => x + y;

describe('addition', () => {
  test('expect 2 + 3 = 5', () => {
    expect(add(2, 3)).toEqual(3);
  });
});
