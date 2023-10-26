import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now();
  expect(end - start).toBeGreaterThanOrEqual(1000);
});

import { remove } from "/src/js/storage/remove.js";
import { save } from "/src/js/storage/save.js";

test("It saves a value to localStorage", () => {
  const key = "test-save";
  save(key, "abc");
  expect(localStorage.getItem(key)).toEqual("abc");
});

test("It removes a value from localStorage", () => {
  const key = "test-remove";
  localStorage.setItem(key, "abc");
  remove(key);
  expect(localStorage.getItem(key)).toBeNull();
});
