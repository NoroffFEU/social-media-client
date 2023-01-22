import { createPost } from "../js/api/posts/create";

const post = {
  title: "Hello World",
  body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  media: "https://getlorem.com/static/images/cicero2.jpg",
  tags: "one, two, three",
};

const body = {
  title: post.title,
  body: post.body,
  media: post.media,
  tags: post.tags,
};

// CREATE SUCCESSFUL POSTS

function createPostSuccess() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ ...body }),
  });
}

describe("create successful post", () => {
  it("returns a response of 200", async () => {
    global.fetch = jest.fn(() => createPostSuccess());

    const response = await createPost(post);

    expect(response).toEqual({ ...body });
  });

  // UNSUCCESSFUL POST

  function unsuccessfulPost() {
    return Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ ...body }),
      statusText: "Error",
    });
  }

  describe("create unsuccessful post", () => {
    it("does not return a response within the 200-299 range", async () => {
      global.fetch = jest.fn(() => unsuccessfulPost());
      await expect(createPost(post)).rejects.toThrow("Error");
    });
  });
});
