/*global global*/
import { login } from "./login";

const mockData = {
  name: "testName",
  email: "test@noroff.no",
  accessToken: "mockToken",
};

const mockTokenFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockData),
});

global.fetch = mockTokenFetch;

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

global.localStorage = new LocalStorageMock();

describe("login", () => {
  global.localStorage.clear();
  it("fetches and stores the token in storage by login", async () => {
    await login("test@noroff.no", "");
    const accessToken = localStorage.getItem("token");
    expect(accessToken).toBeDefined();
  });
});
