import { login } from "./login.js";
import { save } from "../../storage/index.js";
import { apiPath } from "../constants.js";

const mockData = {
  valid: {
    email: "test@example.com",
    password: "password",
    token: "mockToken",
  },
  invalid: {
    email: "invalid@example.com",
    password: "invalidpassword",
  },
};

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("login function", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ accessToken: mockData.valid.token }),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should save the token to storage when login is successful", async () => {
    await login(mockData.valid.email, mockData.valid.password);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `${apiPath}/social/auth/login`,
      expect.objectContaining({
        method: "post",
        body: JSON.stringify({
          email: mockData.valid.email,
          password: mockData.valid.password,
        }),
        headers: expect.any(Object),
      }),
    );
    expect(save).toHaveBeenCalledWith("token", mockData.valid.token);
  });

  it("should throw an error when login fails", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      statusText: "Unauthorized",
    });

    await expect(
      login(mockData.invalid.email, mockData.invalid.password),
    ).rejects.toThrow("Unauthorized");

    expect(save).not.toHaveBeenCalled();
  });
});
