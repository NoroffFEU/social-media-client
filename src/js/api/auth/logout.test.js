import { save, load } from "../../storage/index.js";
import { logout } from "./logout";
import { LocalStorageMock } from "../../test/LocalStorageMock.js";

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("clears the token from browser storage", () => {
    const key = "token";
    const value = "valid token";
    save(key, value);
    expect(load(key)).toEqual(value);
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value));
    logout();
    expect(load(key)).toEqual(null);
    expect(localStorage.getItem(key)).toEqual(null);
  });
});
