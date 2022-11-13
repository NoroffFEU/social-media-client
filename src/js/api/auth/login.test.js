import { login } from "./login";

const validLogin = { email: "test123@noroff.no", password: "password" };
const validToken = { id: "TOKEN", name: "VALID TOKEN" };

class LocalStorageMock {
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

function loginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(validToken),
  });
}

global.localStorage = new LocalStorageMock();

describe("log in function", () => {
  it("returns valid token if given valid login information", async () => {
    global.fetch = jest.fn(() => loginSuccess());
    const token = await login(validLogin);
    expect(token).toEqual(validToken);
  });
});
