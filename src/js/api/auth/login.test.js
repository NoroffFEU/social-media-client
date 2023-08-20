import { login } from "./login";
import LocalStorageMock from "./localStorage.mock";

describe("saveToken", () => {
  it("saves a token in storage", () => {
    expect(localStorage.getItem(key)).toBeNull();
    saveToken(token);
    expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
  });
});
