import { login } from "./login";

class LocalStorageThing {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

globalThis.localStorage = new LocalStorageThing();

const testEmail = "villakilla@noroff.no";
const testPass = "123123123";

const testProfile = {
  name: "villa",
  email: "villakilla@noroff.no",
};

const testUser = JSON.stringify(testProfile);

function loginSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testProfile),
  });
}

function loginFail() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("login", () => {
  it("Returns a valid token", async () => {
    globalThis.fetch = jest.fn(() => loginSuccessful());
    const response = await login(testEmail, testPass);
    const profile = JSON.stringify(response);
    expect(testEmail).toMatch("@noroff.no");
    expect(testPass).toHaveLength(9);
    expect(profile).toMatch(testUser);
  });

  it("Throwing error if credentials are invalid", async () => {
    globalThis.fetch = jest.fn(() => loginFail());
    await expect(login(testEmail, testPass)).rejects.toThrow("Unauthorized");
  });
});
