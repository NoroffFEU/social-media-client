jest.mock("../js/storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(() => "mocked_token"),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "fake_token", userProfile: {} }),
  }),
);

import { login } from "../js/api/auth/login.js";
import * as storage from "../js/storage/index.js";

describe("login", () => {
  beforeEach(() => {
    fetch.mockClear();
    storage.save.mockClear();
  });

  it("fetches and stores a token in browser storage", async () => {
    const email = "thistestuser@stud.noroff.no";
    const password = "qwe123***";

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(expect.any(String), {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: expect.any(Object),
    });

    expect(storage.save).toHaveBeenCalledTimes(2);
    expect(storage.save).toHaveBeenCalledWith("token", "fake_token");
    expect(storage.save).toHaveBeenCalledWith("profile", expect.any(Object));

    expect(profile).not.toHaveProperty("accessToken");
  });

  // Additional test to handle failed login attempt
  it("throws an error when the response is not ok", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "Unauthorized",
      }),
    );

    await expect(login("test@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized",
    );
  });
});
