import { createPost } from "./create";

const title = "Test title";
const body = "test body";
const tags = "test";
const media =
  "https://images.unsplash.com/photo-1667840555698-b859ff73bd13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
const invalidMedia = "";

const post = {
  title: title,
  body: body,
  tags: [tags],
  media: media,
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

/**
 * A mock fetch function that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} statusText The status text to return
 * @returns {Promise<object>} A promise that resolves the test item
 * @example
 * ```js
 * global.fetch = jest.fn(() => fetchFailure(500, "Internal Server Error"));
 * ```
 */
function fetchFailure(status = 404, statusText = "Could not create post") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("Create a new post", () => {
  it("Gets created successfully", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(post);
    expect(response.title).toEqual(post.title);
    expect(response.body).toEqual(post.body);
    expect(response.tags).toEqual(post.tags);
    expect(response.media).toEqual(post.media);
  });

  it("Fails to create a post", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(createPost(title, body, tags, invalidMedia)).rejects.toThrow(
      "Could not create post"
    );
  });
});
