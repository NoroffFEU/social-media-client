import { logout } from "../../../src/js/api/auth/logout.js";
import * as storage from "../../../src/js/storage/index.js";
import "jest-localstorage-mock";

describe("logout function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    storage.save("token", "abc");
  });

  it("should remove the token from localStorage on logout", async () => {
    await logout();

    const savedToken = storage.load("token");

    expect(savedToken).toBeNull();
  });
});
