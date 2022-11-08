import { createPost } from "./create";

const post = {
  title: "string",
  body: "string",
  tags: ["string"],
  media: "https://url.com/image.jpg",
};

/**
 * A mock fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchSuccess());
 * ```
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(post),
  });
}

describe("create", () => {
  it("Creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(post);
    expect(response.title).toEqual(post.title);
    expect(response.body).toEqual(post.body);
    expect(response.tags).toEqual(post.tags);
    expect(response.media).toEqual(post.media);
  });
});
