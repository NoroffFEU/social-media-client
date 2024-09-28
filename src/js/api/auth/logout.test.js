import { save, load } from "../../storage";
import { LocalStorageMock } from "../../storage/localStorageMock";
import { logout } from "../auth/logout";

/* global global */

global.localStorage = new LocalStorageMock();

describe("Logout function", () => {
  it("clears token from localstorage when pressing the log out button", () => {
    const token = "token";
    const value = "userTestToken";

    save(token, value);
    expect(load(token)).toEqual(value);
    logout();
    expect(load(token)).toEqual(null);
  });
});
