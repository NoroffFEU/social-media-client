import { login } from "./login.js";

const testName = "somename";
const testEmail = "somename@stud.noroff.no";
const testPassword = "somepassword123"
const testToken = "token"

const fetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: jest.fn().mockResolvedValue({
    name: testName,
    email: testEmail,
    accessToken: testToken,
  }),
});


class storageMock {
  constructor() {
    this.storage = {};
  }

  clear() {
    this.storage = {};
  }

  setItem(key, value) {
    this.storage[key] = String(value);
  }

  getItem(key) {
    return this.storage[key] || null;
  }
}

global.localStorage = new storageMock();

describe("log in", () => {
  it("stores token if valid inputs are provided", async () => {
    global.fetch = fetchSuccess;
    await login(testEmail, testPassword);
    const storedToken = global.localStorage.getItem("token");
    
    expect(storedToken).toEqual(testToken);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

