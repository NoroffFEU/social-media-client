import { save } from "./save.js";
import LocalStorageMock from "../mocks/localStorage.mock.js";
import { beforeAll, describe, expect, it, global } from "@jest/globals";

const key = "token";
const value = "12345";

beforeAll(() => {
  global.localStorage = new LocalStorageMock();
  localStorage.removeItem(key);
});

describe("saveToken", () => {
  it("should save value to localStorage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    save(key, value);
    const storedValue = localStorage.getItem(key);
    expect(JSON.parse(storedValue)).toEqual(value);
  });
});
