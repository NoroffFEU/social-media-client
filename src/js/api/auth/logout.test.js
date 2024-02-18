import { logout } from "./logout.js";
import localStorageMock from "../../jest-mock/storage-mock.js";

global.localStorage = localStorageMock;

describe("logout", () => {
  it("removes the token", () => {
    localStorage.setItem("token", "some-token");
    logout();
    expect(localStorage.getItem("token")).toBeNull;
  });
});
