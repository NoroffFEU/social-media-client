import * as storage from "../src/js/storage/index.js";
import { logout } from "../src/js/api/auth/logout.js";

jest.mock("../src/js/storage/index.js", () => {
  return {
    remove: jest.fn(),
  };
});

describe("logout", () => {
  it("Removes the token from localStorage", () => {
    logout();
    expect(storage.remove).toHaveBeenCalledTimes(2);
    expect(storage.remove).toHaveBeenCalledWith("token");
  });
});