import { login } from "../../../src/js/api/auth/login.js";
import * as storage from "../../../src/js/storage/index.js";
import "jest-localstorage-mock";

const token = "abc";

describe("login function", () => {
  // global.fetch = jest.fn();

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

    // expect(storage.save).toHaveBeenCalledTimes(2);

    const savedToken = storage.load("token");

    expect(savedToken).toEqual(token);

    // expect(storage.save).toHaveBeenCalledWith(
    //   "token",
    //   JSON.stringify(token),
    // );
  });
});
