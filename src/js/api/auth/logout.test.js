// import StorageMock from "../../jest-mock/storage-mock.js";
import { logout } from "./logout.js";

// global.localStorage = new StorageMock();

import localStorageMock from "../../jest-mock/storage-mock.js";
global.localStorage = localStorageMock;

describe("logout", () => {
  it("removes the token", () => {
    localStorage.setItem("token", "some-token");
    logout();
    expect(localStorage.getItem("token")).toBeNull;
  });
});
