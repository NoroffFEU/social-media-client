import { createPost } from "../js/api/posts/create.js";

// Real post for test function
const title = "TestTitle";
const content = "TestContent";
const imageUrl =
  "https://gravatar.com/avatar/a3fe66b3649b79170638eb376a4c39df?s=400&d=robohash&r=x";
const emptyUrl = "";
const tags = "TestTag";

const post = {
  title: title,
  body: content,
  media: imageUrl,
  tags: tags,
};

// Mock create post for test function

function makePostSuccess(status = 200, statusText = "OK") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve({ ...post }),
  });
}

function makePostFailure(status = 404, statusText = "Data is not valid") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("create post", () => {
  it("makes an item to the api", async () => {
    global.fetch = jest.fn(() => makePostSuccess());
    const result = await createPost(title, content, imageUrl, tags);
    expect(result).toEqual(post);
    expect(result.title).toEqual(title);
    expect(result.body).toEqual(content);
    expect(result.media).toEqual(imageUrl);
    expect(result.tags).toEqual(tags);
  });
  it("returns an error message when create post is unsuccessful", async () => {
    global.fetch = jest.fn(() => makePostFailure());
    await expect(createPost(title, content, emptyUrl, tags)).rejects.toThrow(
      "Data is not valid"
    );
  });
});
