import { login } from "../../../src/js/api/auth/login.js";
import * as storage from "../../../src/js/storage/index.js";
import "jest-localstorage-mock";

const token = "abc";

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ accessToken: token }),
  });

  it("should save the token if the login is successful", async () => {
    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    global.fetch = mockFetchSuccess;

    await login(mockEmail, mockPassword);

    const savedToken = storage.load("token");

    expect(savedToken).toEqual(token);
  });
});
