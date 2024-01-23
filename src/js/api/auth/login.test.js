import { login } from "./login.js";
import * as storage from "../../storage/index.js";

jest.mock("../../storage/index.js");

global.fetch = jest.fn();

describe("login function", () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  it("should save token in storage when login is successful", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: "test-token", user: "test-user" }),
    });
    // Act
    await login("test@example.com", "password123");
    // Assert
    expect(storage.save).toHaveBeenCalledWith("token", "test-token");
  });
});
