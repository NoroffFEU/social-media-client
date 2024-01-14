/* global jest, describe, it, expect, beforeEach */

/* Test to verify that the login function correctly retrieves and saves an access token in browser storage
 */

import { login } from "./login.js";
import * as storage from "../../storage/index.js";

global.fetch = jest.fn();
jest.mock("../../storage/index.js");

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should store a token", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({ accessToken: "mockToken", someOtherData: "data" }),
    });

    await login("piasun@noroff.no", "testpass");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith("token", "mockToken");
    expect(storage.save).toHaveBeenCalledWith("profile", {
      someOtherData: "data",
    });
  });

  it("should handle failed login", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(login("invalid@noroff.no", "invalidpass")).rejects.toThrow(
      "Unauthorized",
    );

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(storage.save).not.toHaveBeenCalled();
  });
});
