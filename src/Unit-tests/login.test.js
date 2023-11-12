import { logout } from "../js/api/auth/logout.js";

/**
 * Mock localStorage for testing
 */
const mockCheckLocalStorage = {
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key, value) => (localStorage[key] = value)),
};

/**
 * Define the mockCheckLocalStorage
 */
global.localStorage = mockCheckLocalStorage;

/**
 * Testing the Logout function
 */
describe("Logout Function Tests", () => {
  /**
   * Test to Remove token from the local storage
   */
  it("Removes token from the local storage", () => {
    /**
     * Call the logout function
     */
    logout();

    /**
     * Expect that removeItem has been called twice
     */
    expect(mockCheckLocalStorage.removeItem).toHaveBeenCalledWith("token");
    expect(mockCheckLocalStorage.removeItem).toHaveBeenCalledWith("profile");

    /**
     * Expect that removeItem has been called 2 times
     */
    expect(mockCheckLocalStorage.removeItem).toHaveBeenCalledTimes(2);
  });

  /**
   * Test: Is local storage cleared?
   */
  it("Checks that the local storage is cleared", () => {
    /**
     * Expect that getItem has been called twice
     */
    expect(mockCheckLocalStorage.getItem("token")).toBeNull();
    expect(mockCheckLocalStorage.getItem("profile")).toBeNull();

    /**
     * Expect that getItem has been called 2 times
     */
    expect(mockCheckLocalStorage.getItem).toHaveBeenCalledTimes(2);
  });
});
