/* global jest, describe, it, expect, beforeEach */

/*
 * Test: The login function fetches and stores a token in browser storage
 */

import { login } from "./login.js";
import { save } from "../../storage/index.js";

global.fetch = jest.fn();
jest.mock("../../storage/index.js");

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should store a token", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: "mockToken", someOtherData: "data" }),
      })
    );

    await login("Dario@noroff.no", "testpass");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith("token", "mockToken");
    expect(save).toHaveBeenCalledWith("profile", { someOtherData: "data" });
  });

  it("should handle failed login", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      })
    );

    await expect(login("invalid@noroff.no", "invalidpass")).rejects.toThrow("Unauthorized");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(save).not.toHaveBeenCalled();
  });
});
