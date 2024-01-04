import { load } from "../../storage/load.js";

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock the global localStorage object
global.localStorage = localStorageMock;

describe('load function', () => {
  it('loads data from storage', () => {
    localStorage.setItem("testKey", JSON.stringify({ key: "value" }));
    const result = load("testKey");
    expect(result).toEqual({ key: "value" });
  });

  it('handles invalid JSON data', () => {
    localStorage.setItem("invalidJsonKey", "invalidJSON");
    const result = load("invalidJsonKey");
    expect(result).toBeNull();
  });
});