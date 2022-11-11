import { createPost } from "./create";

const TITLE = "A heading";
const BODY = "Some text";
const MEDIA = "https://fake.com/media.jpg";
const MEDIA_BAD = "https://fake.com/file.not";
const TAGS = "tag";

const newPost = { title: TITLE, body: BODY, media: MEDIA, tags: TAGS };

function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: "OK",
    json: () => Promise.resolve(newPost),
  });
}

function createFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Failed to create item",
  });
}

describe("Create Post", () => {
  it("creates a new item on the API", async () => {
    global.fetch = jest.fn(() => createSuccess());
    const result = await createPost(TITLE, BODY, MEDIA, TAGS);
    expect(result).toEqual(newPost);
    expect(result.title).toEqual(TITLE);
    expect(result.body).toEqual(BODY);
    expect(result.media).toEqual(MEDIA);
    expect(result.tags).toEqual(TAGS);
  });
  it("fails to create an item on the API", async () => {
    global.fetch = jest.fn(() => createFailure());
    await expect(createPost(TITLE, BODY, MEDIA_BAD, TAGS)).rejects.toThrow(
      "Failed to create item"
    );
  });
});
