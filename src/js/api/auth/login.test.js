import { login } from "./login";
import fetchMock from "jest-fetch-mock";
import { save } from "../../storage/index";

jest.mock("../../storage/index", () => ({
  save: jest.fn(),
}));

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("login function", () => {
  it("should login user successfully and save token and profile", async () => {
    const mockProfile = {
      userId: 12345,
      username: "john_doe",
      accessToken: "mockAccessToken",
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockProfile));

    const email = "john@example.com";
    const password = "password123";

    const response = await login(email, password);

    expect(fetchMock).toHaveBeenCalledWith(expect.any(String), {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    expect(save).toHaveBeenCalledWith("token", "mockAccessToken");
    expect(save).toHaveBeenCalledWith("profile", {
      userId: 12345,
      username: "john_doe",
    });

    expect(response).toEqual({ userId: 12345, username: "john_doe" });
  });

  it("should throw error if login fails", async () => {
    const mockErrorResponse = { error: "Login failed" };
    fetchMock.mockResponseOnce(JSON.stringify(mockErrorResponse), {
      status: 401,
    });

    const email = "john@example.com";
    const password = "incorrectPassword";

    await expect(login(email, password)).rejects.toThrow("Login failed");
  });
});
