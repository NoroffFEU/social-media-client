import { login } from "../js/api/auth/login";
import { save } from "../js/storage";

/**
 * Mocking the save function from "../js/storage" for testing purposes.
 */
jest.mock("../js/storage", () => ({
  save: jest.fn(),
}));

/**
 * Mocking the API path for testing purposes.
 */
jest.mock("../js/api/constants.js", () => ({
  apiPath: "http://localhost/api",
}));

/**
 * Mocking the headers function from "../js/api/headers.js" for testing purposes.
 */
jest.mock("../js/api/headers.js", () => ({
  headers: () => ({
    "Content-Type": "application/json",
  }),
}));

/**
 * Mocking the global fetch function for testing purposes.
 */
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: "fake_access_token",
        user: { id: 1, name: "User Name" },
      }),
    statusText: "OK",
  }),
);

/**
 * Unit tests for the login function.
 */
describe("login", () => {
  beforeEach(() => {
    // Clear mock function calls before each test
    fetch.mockClear();
    save.mockClear();
  });

  /**
   * Tests the login function for successful login.
   * Saves the profile and token when the login is successful.
   */
  it("Saves the profile and token when the login is successful", async () => {
    const email = "test@example.com";
    const password = "correctPassword";

    /**
     * Login to the API with the provided email and password.
     * @param {string} email - The email address of the user.
     * @param {string} password - The password of the user.
     * @returns {Promise<object>} - A promise that resolves with the user profile.
     */
    const profile = await login(email, password);

    // Assert fetch call with correct parameters
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost/api/social/auth/login",
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      },
    );

    // Assert save calls with correct parameters
    expect(save).toHaveBeenCalledWith("token", "fake_access_token");
    expect(save).toHaveBeenCalledWith("profile", {
      user: { id: 1, name: "User Name" },
    });

    // Assert profile object does not contain accessToken
    expect(profile.accessToken).toBeUndefined();

    // Assert profile object matches expected structure
    expect(profile).toEqual({ user: { id: 1, name: "User Name" } });
  });

  /**
   * Tests the login function for unsuccessful login.
   * Throws an error when the login is unsuccessful.
   */
  it("Throws an error when the login is unsuccessful", async () => {
    // Mock fetch to return an unsuccessful response
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      }),
    );

    const email = "test@example.com";
    const password = "wrongPassword";

    // Assert that login function rejects with an error when login is unsuccessful
    await expect(login(email, password)).rejects.toThrow("Unauthorized");

    // Assert that save function is not called
    expect(save).not.toHaveBeenCalled();
  });
});
