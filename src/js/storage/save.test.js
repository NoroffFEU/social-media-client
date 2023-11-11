// save.test.js
import { save } from "./save";
import "jest-localstorage-mock";

describe("save function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores a token in localStorage", () => {
    const key = "userToken";
    const value = { token: "exampleToken" };

    save(key, value);

    expect(JSON.parse(localStorage.getItem(key))).toEqual(value);
  });

  it("handles storing with non-string key", () => {
    const key = 123;
    const value = { token: "exampleToken" };

    save(key, value);

    expect(JSON.parse(localStorage.getItem(String(key)))).toEqual(value);
  });

  it("handles storing with non-object value", () => {
    const key = "userToken";
    const value = "exampleToken";

    save(key, value);

    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });
});
