import login from "../../js/api/auth/login.js";
import { save } from "../../js/storage/save.js";
import * as localStorage from "../../js/storage/load.js";

jest.mock("../../js/storage/save.js", () => ({
  save: jest.fn(),
}));

jest.mock('../../js/storage/load.js', () => ({
  load: jest.fn(),
}));

describe("login function", () => {
  test('login function stores token in browser storage', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: 'exampleToken' }),
      })
    );

    // Mock the load function
    localStorage.load.mockReturnValueOnce(null);

    // Call the login function
    await login('example@noroff.no', 'password');

    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
    expect(localStorage.load).toHaveBeenCalledWith('token');
    expect(save).toHaveBeenCalledWith('token', 'exampleToken');
  });

  test("login function handles API error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      })
    );

    // Call the login function and expect it to throw an error
    await expect(login("example@noroff.no", "password")).rejects.toThrow("Unauthorized");
  });
});