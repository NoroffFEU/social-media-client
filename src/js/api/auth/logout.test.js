import { logout } from "./logout.js";
import { load, save } from "../../storage";
import { localStorageMock } from "../../test/localStorageMock.js";

describe("Logout function", () => {
  let localStorage;

  beforeEach(() => {
    localStorage = new localStorageMock();
    global.localStorage = localStorage;
  });

  afterEach(() => {
    global.localStorage = null;
  });

  it("clears the token from browser storage", () => {
    const key = "token";
    const value = "userTestAccessTokenScript";
    save(key, value);
    expect(load(key)).toEqual(value);
    logout();
    expect(load(key)).toEqual(null);
  });
});
