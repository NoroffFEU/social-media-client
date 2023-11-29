/* SEE IF TOKEN IS REMOVED FROM LOCAL STORAGE AFTER LOGOUT */

import { logout } from "./src/js/api/auth/logout.js"; // Import your logout function

if (process.env.NODE_ENV === "test") {
  require("jest-localstorage-mock");
}

describe("logout function", () => {
  beforeEach(() => {
    if (process.env.NODE_ENV === "test") {
      localStorage.setItem("token", "some-token-value"); // Set a value for "token" in local storage before each test
    }
  });

  it('should remove the "token" from local storage when logging out', () => {
    // Call the logout function
    logout();

    // Check if "token" key no longer exists in local storage
    expect(localStorage.getItem("token")).toBeNull();
  });
});
