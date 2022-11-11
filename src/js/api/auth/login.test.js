import { login } from "./login";

const testEmail = "test@noroff.no";
const testPassword = "asdasdasd";
const testSuccessResponse = {
  name: "test",
  email: "test@noroff.no",
  banner: null,
  avatar:
    "https://isorepublic.com/wp-content/uploads/2022/10/iso-republic-fall-office-candle-1100x762.jpg",
  accessToken: "doesthishavetobesomething",
};

// Mock local storage, https://stackoverflow.com/a/41434763
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
/////////////////////////////////////////////

function fetchLoginSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testSuccessResponse),
  });
}

function fetchLoginFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("Logging in", () => {
  it("successfully returns a valid token and response object from local storage", async () => {
    global.fetch = jest.fn(() => fetchLoginSuccess());
    const expectedToken = testSuccessResponse.accessToken;
    const response = await login(testEmail, testPassword);
    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toEqual(expectedToken);
    expect(response).toEqual(testSuccessResponse);
  });

  it("fails to return a valid token and or response object", async () => {
    global.fetch = jest.fn(() => fetchLoginFailure());
    await expect(login(testEmail, testPassword)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
