import { login } from "./login";

export default class LocalStorageMock {
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

const mail = "test@test.test";
const password = "abcd";
const username = "test1";
const token = "lksjadhfkljsdahfjlk";
const profile = {
  name: username,
  email: mail,
  accessToken: token,
};

function fetchMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "OK",
    json: () => Promise.resolve(profile),
  });
}

describe("login", () => {
  it("saves a token in localStorage", async () => {
    global.fetch = jest.fn(() => fetchMockSuccess());
    const result = await login(mail, password);
    expect(result).toEqual(profile);
    expect(JSON.parse(global.localStorage.getItem("token"))).toEqual(
      token
    );
  });
});