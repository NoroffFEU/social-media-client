import { login } from "./login";

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
}

const fetchMock = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "god_gamer",
    email: "godgamer@noroff.no",
    banner: null,
    avatar: null,
    accessToken: "godgamers token",
  }),
});

global.fetch = fetchMock;
global.localStorage = new LocalStorageMock();

describe("login", () => {
  it("stores a token when provided with valid credentials", async () => {
    localStorage.clear();
    await login("godgamer@noroff.no", "");
    const token = localStorage.getItem("token");
    expect(token).not.toBeNull();
  });
});
