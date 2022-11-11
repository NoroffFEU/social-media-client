import { logout } from "./logout";

const testProfile = {
  name: "test",
  email: "test@noroff.no",
  banner: null,
  avatar:
    "https://isorepublic.com/wp-content/uploads/2022/10/iso-republic-fall-office-candle-1100x762.jpg",
};
const testAccessToken = "doesthishavetobesomething";

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

describe("Logging out", () => {
  it("Logs you out of the site and clears the local storage of your profile and token", () => {
    localStorage.setItem("profile", JSON.stringify(testProfile));
    localStorage.setItem("token", JSON.stringify(testAccessToken));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
