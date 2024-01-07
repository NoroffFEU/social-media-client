import { load } from "../../storage/load.js";
import "jest-localstorage-mock";

describe("load function", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("loads data from storage", () => {
    localStorage.setItem("testKey", JSON.stringify({ key: "value" }));
    const result = load("testKey");
    expect(result).toEqual({ key: "value" });
  });

  it("handles invalid JSON data", () => {
    localStorage.setItem("invalidJsonKey", "invalidJSON");
    const result = load("invalidJsonKey");
    expect(result).toBeNull();
  });
});
