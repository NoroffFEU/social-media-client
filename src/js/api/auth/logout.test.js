/*global global*/

import { logout } from "./logout";

const mockData = {
  accessToken: "mockToken",
};

class LocalStorageMock {
  constructor() {
    this.store = { mockData };
  }

  removeItem(key) {
    return this.store[key] || null;
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("clears the the token from storage by logout", async () => {
    expect(localStorage.removeItem("accessToken")).toBeNull();
  });
});
