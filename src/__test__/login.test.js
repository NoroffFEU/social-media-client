// Mock the dependencies used in login function
import { login } from "../js/api/auth/login.js";
import { save } from "../js/storage/index";

jest.mock("../js/storage/index", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

global.fetch = jest.fn();

describe("Login API", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should store a token and profile with valid credentials", async () => {
    const mockResponse = {
      accessToken: "fake-token",
      name: "John Doe",
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await login("validEmail@example.com", "validPassword");

    expect(save).toHaveBeenCalledWith("token", "fake-token");
    expect(save).toHaveBeenCalledWith("profile", { name: "John Doe" });

    expect(result).toEqual({ name: "John Doe" });
  });

  it("should throw an error with invalid credentials", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(
      login("invalidEmail@example.com", "wrongPassword"),
    ).rejects.toThrow("Unauthorized");
  });
});
