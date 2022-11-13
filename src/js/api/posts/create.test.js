import { createPost } from "./create";

const title = "Test title";
const badTitle = "";
const body = "Test body";
const badBody = "";
const tags = ["tag1", "tag2"];
const media = "Test media";
const badMedia = "";

const post = {
  title: title,
  body: body,
  tags: tags,
  media: media,
};

// Mock the create function that succeeds
function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 201,
    statusText: "Created",
    json: () => Promise.resolve(post),
  });
}

// Mock the create function that fails
function createFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Could not create post",
  });
}

// Test that the create function returns a post
describe("createPost", () => {
  it("returns a post when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => createSuccess());
    const result = await createPost(title, body, media, tags);
    expect(result.title).toEqual(title);
    expect(result.body).toEqual(body);
    expect(result.tags).toEqual(tags);
    expect(result.media).toEqual(media);
  });
  // Test that the create function throws an error when provided with invalid credentials
  it("throws an error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => createFailure());
    await expect(createPost(badTitle, badBody, badMedia, tags)).rejects.toThrow(
      "Could not create post"
    );
  });
});
