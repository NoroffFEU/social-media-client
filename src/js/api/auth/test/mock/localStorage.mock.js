export const localStorageMock = {
  getItem: jest.fn((key) => {
    if (key === "token") {
      return JSON.stringify("12345"); // Return a valid token value
    }
    return null;
  }),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
