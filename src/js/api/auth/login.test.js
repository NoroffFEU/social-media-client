import { save, load } from "../../storage/index.js";
import { login } from "./login.js";

// eslint-disable-next-line
global.fetch = jest.fn();

// Mock the storage
jest.mock("../../storage/index", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("login function", () => {
  afterEach(() => {
    fetch.mockReset();
    jest.clearAllMocks();
  });

  it("should store a token when provided with valid credentials", async () => {
    const validEmail = "test@example.com";
    const validPassword = "password123";

    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({
        accessToken: "validToken",
        email: validEmail, // you can add other information like name, avatar, etc.
      }),
    });

    load.mockReturnValueOnce(null);

    const result = await login(validEmail, validPassword);

    expect(save).toHaveBeenCalledWith("token", "validToken");
    expect(save).toHaveBeenCalledWith("profile", {
      email: validEmail,
    });

    expect(result).toEqual({ email: validEmail });
  });
});
