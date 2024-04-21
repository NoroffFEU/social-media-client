import { logout } from "../../api/auth/logout.js";
import localStorage from "../mock/localStorageMock.js";

global.localStorage = localStorage;

describe("logout", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("removes the token", () => {
    localStorage.setItem("token", "profile");
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
