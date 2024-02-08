import StorageMock from "../../jest-mock/storage-mock.js";
import { logout } from "./logout.js";

global.localStorage = new StorageMock();

describe("logout", () => {
  test("removes the token", () => {
    localStorage.setItem("token", "doesn't matter");
    logout();
    expect(localStorage.getItem("token")).toBeNull;
  });
});
