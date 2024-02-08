/**
 * Creates a mock location object with the specified href.
 *
 * @param {string} [href=""] - The href value for the mock location.
 * @returns {Object} - The mock location object with the specified href.
 * @example
 * // Create a mock location with a custom href
 * const mockLocation = createMockLocation("index.html");
 */
export const createMockLocation = (href = "") => ({
  href,
});

// eslint-disable-next-line no-undef
Object.defineProperty(global, "window", {
  value: {
    location: createMockLocation(),
  },
});
