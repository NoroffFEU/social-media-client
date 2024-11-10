import { login } from "../src/js/api/auth/login";
import { save, load } from "../src/js/storage/index.js";

global.fetch = jest.fn();
jest.mock("../src/js/storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("login", () => {
  beforeEach(() => {
    fetch.mockClear();
    save.mockClear();
    load.mockClear();
  });

  test("stores token and profile when valid credentials are typed", async () => {
    const mockProfile = {
      id: "user123",
      name: "Test User",
      accessToken: "fakeToken123",
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProfile,
    });

    const email = "test@example.com";
    const password = "password123";

    load.mockReturnValue(null);

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/social/auth/login"),
      {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: expect.any(Object),
      },
    );

    expect(save).toHaveBeenCalledWith("token", "fakeToken123");
    expect(save).toHaveBeenCalledWith("profile", {
      id: "user123",
      name: "Test User",
    });
    expect(profile).toEqual({ id: "user123", name: "Test User" });
  });

  test("shows an error when bad response", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    const email = "wrong@example.com";
    const password = "wrongpassword";

    await expect(login(email, password)).rejects.toThrow("Unauthorized");
  });
});