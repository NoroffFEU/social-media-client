import { createPost } from "./create";

const TEST_ITEM = {
  title: "randomTitle",
  body: "randomBody",
  media: "mediaURL",
  tags: "randomTag",
};

/**
 * Mock a fetch function that successfully fetches
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchSuccess())
 */

function fetchSuccessful() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_ITEM),
  });
}

/**
 * Mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"))
 */

function fetchUnsuccessful(status = 404, statusText = "Error") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("Returns a valid item object when new post is made", async () => {
    global.fetch = jest.fn(() => fetchSuccessful());
    const item = await createPost();
    expect(item).toEqual(TEST_ITEM);
  });

  it("Throws an error if fetch fails", async () => {
    global.fetch = jest.fn(() => fetchUnsuccessful());
    await expect(createPost()).rejects.toThrow(Error);
  });
});
