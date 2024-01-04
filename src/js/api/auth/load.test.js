import { load } from "../../storage/load.js";

describe("load function", () => {
  it("loads data from storage", () => {
   
    localStorage.setItem("testKey", JSON.stringify({ key: "value" }));
    const result = load("testKey");
    expect(result).toEqual({ key: "value" });
  });

  it("returns null for non-existing key", () => {
    const result = load("nonExistingKey");
    expect(result).toBeNull();
  });

  it("handles invalid JSON data", () => {
 
    localStorage.setItem("invalidJsonKey", "invalidJSON");
     const result = load("invalidJsonKey");
    expect(result).toBeNull();
  });
});