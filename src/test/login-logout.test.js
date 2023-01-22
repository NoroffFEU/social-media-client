import { login } from "../js/api/auth/login";
import { logout } from "../js/api/auth/logout";

const INVALID_EMAIL = "abcd@gmail.no";
const VALID_EMAIL = "lhvk@stud.noroff.no";
const PASSWORD = "abcd1234";
const TOKEN = "aaaabbbb11112222";

const user = {
  name: "larshalvor",
  email: VALID_EMAIL,
};

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(key) {
    return this.value[key] || null;
  }

  setItem(key, value) {
    this.value[key] = String(value);
  }

  removeItem(key) {
    delete this.value[key];
  }
}

global.localStorage = new LocalStorageMock();

function loginSuccess() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ ...user, accessToken: TOKEN }),
  });
}

function loginFailed() {
  return Promise.resolve({
    ok: false,
    statusText: "Invalid credentials",
  });
}

// LOGIN

describe("login", () => {
  it("returns a valid token when valid credentials is provided", async () => {
    global.fetch = jest.fn(() => loginSuccess());
    const profile = await login(VALID_EMAIL, PASSWORD);
    expect(profile).toEqual(user);

    expect(localStorage.getItem("token")).toMatch(TOKEN);
  });

  it("returns an error when an invalid email is entered", async () => {
    global.fetch = jest.fn(() => loginFailed());
    await expect(login(INVALID_EMAIL, PASSWORD)).rejects.toThrow(
      "Invalid credentials"
    );
  });
});

// LOGOUT

describe("logout", () => {
  it("clears the token from local storage upon logout", () => {
    localStorage.setItem("token", "profile");

    logout();
    expect(localStorage.getItem("token", "profile")).toEqual(null);
  });
});
