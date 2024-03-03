import { logout } from "./logout";

// Mock the localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  clear() {
    this.store = {};
  }

  removeItem(key) {
    delete this.store[key];
  }
}
global.localStorage = new LocalStorageMock();

// Mock the data
const mockAccessToken = "mockAccessToken";
const mockProfile = {
  name: "mockName",
  email: "validuser@noroff.no",
  banner: "",
  avatar: "",
  accessToken: "mockAccessToken",
};

describe("logout", () => {
  beforeEach(() => {
    global.localStorage.clear();
  });

  it("should remove token and profile from browser storage", async () => {
    // Set initial token and profile
    global.localStorage.setItem("token", mockAccessToken);
    global.localStorage.setItem("profile", JSON.stringify(mockProfile));

    // Call the logout function
    logout();

    // Assert that token and profile are removed from localStorage
    expect(global.localStorage.getItem("token")).toBeNull();
    expect(global.localStorage.getItem("profile")).toBeNull();
  });
});
