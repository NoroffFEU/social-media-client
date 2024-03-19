import { login } from "./login";
import * as storage from "../../storage/index.js";

const test_username = "testuser";
const test_password = "testpassword";
const test_item = { username: "username", token: "12345678" };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(test_item),
  });
}

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
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("getToken", () => {
  it("Returns an access token when provided with valid username and password", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await login(test_username, test_password);
    const token = storage.save("token", test_item.token);
    const profile = storage.save("profile", test_item.username);
    localStorage.setItem(token, profile);
    expect(item).toEqual(test_item);
  });
});
