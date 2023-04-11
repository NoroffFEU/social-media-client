import { logout } from "./logout.js";
import { load, save } from "../../storage";
import { localStorageMock } from "../../test/localStorageMock.js";

global.localStorage = new localStorageMock();

describe("Logout function", () => {
  it("clears the token from browser storage", () => {
    const key = "token";
    const value = "userTestAccessTokenScript";
    save(key, value);
    expect(load(key)).toEqual(value);
    logout();
    expect(load(key)).toEqual(null);
  });
});
