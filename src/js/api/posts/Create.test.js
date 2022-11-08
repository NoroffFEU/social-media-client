import { createPost } from "./create.js";

const TITLE = "title";
const BODY = "body";
const TAGS = "tags";
const MEDIA = "media";
const FAIL_TITLE = "";

const post = {
  title: TITLE,
  body: BODY,
  tags: TAGS,
  media: MEDIA,
};

/**
 * This is a mock fetch simulating a successful POST request to the API
 * @param {number} status
 * @param {string} statusText
 * @returns
 */
function createSuccessful(status = 201, statusText = "Post Created!") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...post }),
  });
}

/**
 * This is a mock fetch simluation a failed POST request to the API
 * @param {number} status
 * @param {string} statusText
 * @returns
 */
function createFailure(status = 404, statusText = "Creation of post failed!") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("creates a new post", async () => {
    global.fetch = jest.fn(() => createSuccessful());
    const data = await createPost(TITLE, BODY, TAGS, MEDIA);
    expect(data).toEqual(post);
    expect(TITLE).toBeDefined();
    expect(data.title).toEqual(TITLE);
    expect(data.body).toEqual(BODY);
    expect(data.tags).toEqual(TAGS);
    expect(data.media).toEqual(MEDIA);
  });

  it("Gives an error if post cannot be created", async () => {
    global.fetch = jest.fn(() => createFailure());
    await expect(createPost(TITLE, BODY, TAGS, FAIL_TITLE)).rejects.toThrow(
      "Creation of post failed!"
    );
  });
});
