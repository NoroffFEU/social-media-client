// login.test.js
import { login } from "./login.js";
import { save } from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("stores token and profile on successful login", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest
        .fn()
        .mockResolvedValue({ accessToken: "fakeToken", name: "John Doe" }),
    });

    const profile = await login("test@example.com", "password123");

    expect(save).toHaveBeenCalledWith("token", "fakeToken");
    expect(save).toHaveBeenCalledWith("profile", { name: "John Doe" });
    expect(profile).toEqual({ name: "John Doe" });
  });

  it("throws an error on failed login", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(login("test@example.com", "wrongpassword")).rejects.toThrow(
      "Unauthorized",
    );
    expect(save).not.toHaveBeenCalled();
  });
});
