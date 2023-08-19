import { login } from "./login.js";
import { apiPath } from "../constants.js";
import { localStorageMock } from "../../mocks/localStorage.mock.js";

describe("login function", () => {
  beforeEach(() => {
    localStorageMock();
    global.fetch = jest.fn();
    global.fetch.mockClear();
    global.localStorage.clear();
  });

  it("should call the correct endpoint with the provided credentials and store the token", async () => {
    const email = "test@example.com";
    const password = "testPassword";
    const mockToken = "mockToken123";

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ accessToken: mockToken }),
    });

    await login(email, password);

    expect(global.fetch).toHaveBeenCalledWith(
      `${apiPath}/social/auth/login`,
      expect.objectContaining({
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: expect.anything(),
      }),
    );

    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(mockToken),
    );
  });
});
