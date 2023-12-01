import { logout } from "./logout.js";

// Mock localStorage with only removeItem
const mockLocalStorage = {
  removeItem: jest.fn(),
};

describe("logout function", () => {
  beforeEach(() => {
    // Clear the mock between tests
    mockLocalStorage.removeItem.mockClear();
    global.localStorage = mockLocalStorage;
  });

  it("should remove the token from local storage", () => {
    // Call the logout function
    logout();

    // Check if removeItem is called with "token"
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith("token");
  });
});
