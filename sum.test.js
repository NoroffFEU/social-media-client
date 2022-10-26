// const sum = require('./sum');
import { sum } from "./sum";

test("adds 1 and 2 to be 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 1 and 2 to be 4", () => {
  expect(sum(1, 2)).not.toBe(4);
});

// "eslint --fix",
// "sourceType": "module"
