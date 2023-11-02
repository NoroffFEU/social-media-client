import { logout } from "../../src/js/api/auth/logout.js";
import localStorageMock from "../mocks/localStorage.js";

global.localStorage = localStorageMock;

describe("logout", () => {
  it("should remove token from local storage", () => {
    localStorage.setItem("token", "1234567890");
    logout();
    expect(localStorage.getItem("token")).toBe(null);
  });
});
