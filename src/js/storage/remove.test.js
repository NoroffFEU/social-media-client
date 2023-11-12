// remove.test.js
import { remove } from "./remove";
import "jest-localstorage-mock";

describe("remove function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("removes the token from localStorage", () => {
    const key = "userToken";
    const value = "exampleToken";
    localStorage.setItem(key, value);

    remove(key);

    expect(localStorage.getItem(key)).toBeNull();
  });

  it("handles removing a non-existent key", () => {
    const key = "nonExistentKey";
    remove(key);

    expect(localStorage.getItem(key)).toBeNull();
  });
});
