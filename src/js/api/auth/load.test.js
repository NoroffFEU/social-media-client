import { load } from "../../storage/load.js";

describe('load function', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('loads data from storage', () => {
    const testKey = 'testKey';
    const testData = { key: 'value' };

    // Set an item in localStorage for the test
    localStorage.setItem(testKey, JSON.stringify(testData));

    // Call the load function
    const result = load(testKey);

    // Expect the result to be the expected data
    expect(result).toEqual(testData);
  });

  it('handles invalid JSON data', () => {
    const invalidJsonKey = 'invalidJsonKey';

    // Set an item in localStorage with invalid JSON data
    localStorage.setItem(invalidJsonKey, 'invalidJSON');

    // Call the load function
    const result = load(invalidJsonKey);

    // Expect the result to be null since JSON parsing failed
    expect(result).toBeNull();
  });
});