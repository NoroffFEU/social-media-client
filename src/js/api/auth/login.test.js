import { login } from "./login";
import * as storage from "../../storage/index.js";
import "jest-localstorage-mock";

jest.mock("../../storage/index.js", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("login", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch and store a token in browser storage", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "password";
    const mockAccessToken = "mockToken";

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ token: mockAccessToken }),
    });

    await login(mockEmail, mockPassword);

    expect(fetch).toHaveBeenCalledWith(
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      {
        method: "post",
        body: JSON.stringify({ email: mockEmail, password: mockPassword }),
        headers: expect.any(Object),
      },
    );

    expect(storage.save).toHaveBeenCalledWith(
      "profile",
      expect.objectContaining({ token: mockAccessToken }),
    );
  });
});
