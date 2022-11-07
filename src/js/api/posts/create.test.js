import { createPost } from "./create.js";

const postTitleTest = "title";
const postBodyTest = "body";
const postMediaTest = "https://picsum.photos.jpg";
const postTagTest = "tag";

const post = {
  title: postTitleTest,
  body: postBodyTest,
  media: postMediaTest,
  tag: postTagTest,
};

function postSuccessful(
  status = 201,
  statusText = "Post created successfully"
) {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(post),
  });
}

function posteUnsuccessful(
  status = 404,
  statusText = "Post created unsuccessfully"
) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("create post", () => {
  it("Creates a new post", async () => {
    global.fetch = jest.fn(() => postSuccessful());
    const data = await createPost(
      postTitleTest,
      postBodyTest,
      postMediaTest,
      postTagTest
    );
    expect(data).toEqual(post);
    expect(postTitleTest).toBeDefined();
    expect(data.title).toEqual(postTitleTest);
    expect(data.body).toEqual(postBodyTest);
    expect(data.media).toEqual(postMediaTest);
    expect(data.tag).toEqual(postTagTest);
    expect(postMediaTest).toMatch(/\.(jpg|jpeg|png|webp|avif|gif)(?=\?.+|$)/);
  });

  it("Show's error if post can't be created", async () => {
    global.fetch = jest.fn(() => posteUnsuccessful());
    await expect(
      createPost(postTitleTest, postBodyTest, postMediaTest, postTagTest)
    ).rejects.toThrow("Post created unsuccessfully");
  });
});
