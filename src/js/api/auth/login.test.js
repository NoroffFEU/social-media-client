import { login } from "./login.js";

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: "fakeToken" }),
    statusText: "OK",
  }),
);

// Mocking the localStorage
let localMockStorage = {};

beforeEach(() => {
  localMockStorage = {};
  global.localStorage = {
    getItem: jest.fn((key) => localMockStorage[key]),
    setItem: jest.fn((key, value) => {
      localMockStorage[key] = value.toString();
    }),
    clear: jest.fn(() => {
      localMockStorage = {};
    }),
  };
});

describe("login functionality", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves token to localStorage", async () => {
    const userEmail = "testUser@example.com";
    const userPassword = "securePassword123";

    await login(userEmail, userPassword);

    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toBe("fakeToken");
  });
});
