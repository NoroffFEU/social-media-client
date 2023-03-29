import { login } from "../api/auth/login";

// Define a user object to use for testing
const USER = {
  name: "name",
  email: "user@example.com",
  avatar: "https://avatar.example.com/",
  banner: "https://banner.example.com/",
  accessToken: "token",
};

// Define a function to return a successful fetch response
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(USER),
  });
}

// Begin the test suite for the login function
describe("login", () => {
  // Test to verify that a valid object is returned when valid credentials are provided
  it("Returns a valid object when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    global.localStorage = {
      setItem: jest.fn(),
    };
    const user = await login("user@example.com", "password");
    expect(user).toMatchObject(USER)
    expect(user.accessToken).toBeUndefined();
  });

  // Test to verify that the accessToken is stored in localStorage
  it("Stores accessToken in localStorage", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    const user = await login("user@example.com", "password");
    expect(user).toBeDefined();
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith("token", JSON.stringify(USER.accessToken));
  });

  // Test to verify that the user profile is stored in localStorage
  it("Stores user profile in localStorage", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    const user = await login("user@example.com", "password");
    expect(user).toBeDefined();
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith("profile", JSON.stringify(user));
  });
});
