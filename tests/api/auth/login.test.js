jest.mock("../../../src/js/storage/index.js", () => ({
  save: jest.fn(),
}));

jest.mock("../../../src/js/api/headers.js", () => ({
  headers: jest.fn().mockReturnValue({ "Content-Type": "application/json" }),
}));

import { login } from "../../../src/js/api/auth/login.js";
import * as storage from "../../../src/js/storage/index.js";

describe("login function", () => {
  global.fetch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should save the token and profile if the login is successful", async () => {
    const mockEmail = "user@example.com";
    const mockPassword = "password123";
    const mockResponse = {
      accessToken: "fake-token",
      user: {
        name: "Per Arne",
        email: "user@example.com",
      },
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await login(mockEmail, mockPassword);

    expect(storage.save).toHaveBeenCalledTimes(2);
    expect(storage.save).toHaveBeenCalledWith(
      "token",
      mockResponse.accessToken,
    );
    expect(storage.save).toHaveBeenCalledWith(
      "profile",
      expect.objectContaining({
        name: mockResponse.user.name,
        email: mockResponse.user.email,
      }),
    );

    expect(result).toEqual(
      expect.objectContaining({
        name: mockResponse.user.name,
        email: mockResponse.user.email,
      }),
    );
  });

  it("should throw an error if the login is unsuccessful", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(login("wrong@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized",
    );

    expect(storage.save).not.toHaveBeenCalled();
  });
});

//No matter what I do I cant get this to work.
