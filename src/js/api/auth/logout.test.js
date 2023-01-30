import { logout } from "./logout";

class LSMock {
  constructor() {
    this.storage = {
      token: "token",
      profile: `{"name":"god_gamer","email":"godgamer@noroff.no","banner":"","avatar":""}`,
    };
  }

  getItem(key) {
    return this.storage[key] || null;
  }
  removeItem(key) {
    delete this.storage[key];
  }
}

global.localStorage = new LSMock();

describe("logout", () => {
  it("removes saved token in browser", () => {
    logout();
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("profile")).toBeNull();
  });
});
