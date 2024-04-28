import { logout } from "../logout.js";
import localStorage from "../../mock/localStorageMock.js";

// Set up mock localStorage globally for all tests
global.localStorage = localStorage;

describe("Logout Functionality", () => {
  // Clear localStorage after each test to ensure isolation
  afterEach(() => {
    localStorage.clear();
  });

  // Test to verify if logout removes the token from localStorage
  it("removes the token from localStorage", () => {
    // Arrange: Set an item in localStorage to simulate a logged-in state
    localStorage.setItem("token", "profile");

    // Act: Call the logout function
    logout();

    // Assert: Check if the token is removed from localStorage
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
