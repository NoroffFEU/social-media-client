/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchSuccess(TEST_SUCCESS_RESPONSE));
 */
export function fetchSuccess(TEST_SUCCESS_RESPONSE) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_SUCCESS_RESPONSE),
  });
}

/**
 * A mock fetch function that fetches and returns 401, "Unauthorized"
 * @example
 * global.fetch = jest.fn(() => fetchUnauthorized());
 */
export function fetchUnauthorized() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

/**
 * A mock fetch function that fetches returns 400, "Bad Request"
 * @example
 * global.fetch = jest.fn(() => fetchBadRequest());
 */
export function fetchBadRequest() {
  return Promise.resolve({
    ok: false,
    status: 400,
    statusText: "Bad Request",
  });
}
