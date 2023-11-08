import { login } from "./login.js";

const emailTesting = "testing@noroff.no";
const passwordTesting = "12345678";
const tokenTesting = "lkavlnaldjfaljösadf";

const mockUser = {
  email: emailTesting,
  password: passwordTesting,
  accessToken: tokenTesting,
};

const mockLocalStorage = {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
  clear: jest.fn(() =>
    Object.keys(localStorage).forEach((key) => delete localStorage[key]),
  ),
};

beforeAll(() => {
  globalThis.localStorage = mockLocalStorage;
  globalThis.fetch = mockLogInSuccess;
});

// global.localStorage = mockLocalStorage;

const mockLogInSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockUser),
});

describe("login", () => {
  it("returns a user object if the call is successful", async () => {
    // global.fetch = mockLogInSuccess;
    const data = await login(mockUser);
    expect(data).toEqual(mockUser);
  });

  it("Adds an access token to local storage", async () => {
    await login(mockUser);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(mockUser.accessToken),
    );
  });
});
