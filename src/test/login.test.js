import { login } from "../js/api/auth/login";

let localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe("Login Function", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({ accessToken: "mockAccessToken", name: "John Doe" }),
    }),
  );

  beforeEach(() => {
    localStorageMock.setItem.mockClear();
  });

  test("stores a token when provided with valid credentials", async () => {
    await login("example@example.com", "password");

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("mockAccessToken"),
    );
  });
});
