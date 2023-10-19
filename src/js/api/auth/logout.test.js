import { logout } from "./logout.js";
import { localStorageMock } from "./mocks/localStorage.mock.js";

global.localStorage = localStorageMock;

describe("Logout", () => {
  it("clears token from browser storage", () => {
    logout();
    expect(localStorage.token).toBeFalsy();
  });
});
