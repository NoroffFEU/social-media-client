import * as storage from "../js/storage/index";

describe("Testing localstorage save, load and remove functions", () => {
  it("Saves data to localStorage", () => {
    const key = "token";
    const value = ["email", "password"];
    const item = JSON.stringify(value);
    storage.save(key, value);
    expect(localStorage.getItem(key)).toEqual(item);
  });

  it("loads data from localStorage", () => {
    const key = "token";
    const value = ["email", "password"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
  });

  it("removes data from localStorage", () => {
    const key = "token";
    const value = ["email", "password"];
    storage.save(key, value);
    expect(storage.load(key)).toEqual(value);
    storage.remove(key);
    expect(storage.load(key)).toEqual(undefined || null);
  });
});
