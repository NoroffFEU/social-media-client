import { save } from "./save";
import storage from "./storageMock.js";

const testValue = { test: true };

global.localStorage = storage;

describe("save", () => {
  it("should save the correct value to localStorage", () => {
    save("key", testValue);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "key",
      JSON.stringify(testValue)
    );
    expect(localStorage.getItem("key")).toEqual(JSON.stringify(testValue));
  });
});
