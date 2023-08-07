import { logout } from "./logout.js";

// Mocking the localStorage method

const mockRemoveItem = jest.fn();

global.localStorage = {
  removeItem: mockRemoveItem,
};

describe("logout function", () => {
  afterEach(() => {
    // Clear mock calls after each test
    mockRemoveItem.mockClear();
  });

  it("clears the token from browser storage", () => {
    logout();
    expect(mockRemoveItem).toHaveBeenCalledWith("token");
  });

  it("clears the profile from browser storage", () => {
    logout();
    expect(mockRemoveItem).toHaveBeenCalledWith("profile");
  });
});
