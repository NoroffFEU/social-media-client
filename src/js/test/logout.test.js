import { logout } from "../api/auth/logout";
import { localStorageMock } from "./localStorageMock";

global.localStorage = localStorageMock;

const mocktoken = "mock-token";

describe("logout", () => {
  it("clears the token from browser storage", () => {
    //   manually set the token
    localStorage.setItem("token", mocktoken);
    // check that token is set
    expect(localStorage.getItem("token")).toBeDefined();
    // call logout function
    logout();
    const removedToken = localStorage.getItem("token");
    // check that token is removed
    expect(removedToken).toEqual(null);
  });
});
