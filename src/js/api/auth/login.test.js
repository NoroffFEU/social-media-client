import { login } from "./login";

// LOCALSTORAGE MOCK
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

global.localStorage = localStorageMock;

// FETCH
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true, accessToken: "testToken" }),
  }),
);

// TEST
describe("Login", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("with valid credentials when login, it stores a token", async () => {
    const email = "valid@test.com";
    const password = "valid123";
    await login(email, password);

    const storedToken = localStorage.getItem("token");
    const parsedToken = storedToken && JSON.parse(storedToken);

    expect(parsedToken).toEqual("testToken");
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify("testToken"),
    );
  });
});
