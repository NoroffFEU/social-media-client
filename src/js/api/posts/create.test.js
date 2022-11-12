import { createPost } from "./create";

function fetchSuccessPost() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(newPost),
  });
}

function fetchFailureLogin(status = 401, statusText = "refresh token missing") {
  return Promise.resolve({
    ok: false,
    status: "Unauthorized",
    statusText,
  });
}

const newPost = {
  title: "new Post",
  body: "new post body",
  media: "url",
  id: 1,
};

describe("createPost", () => {
  it("throw error if fetch is a failure", async () => {
    global.fetch = jest.fn(() => fetchFailureLogin());
    await expect(
      createPost(newPost.title, newPost.body, newPost.media)
    ).rejects.toThrow("refresh token missing");
  });

  it("creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccessPost());
    const creatingNewPost = await createPost(
      newPost.title,
      newPost.body,
      newPost.media
    );
    expect(creatingNewPost).toEqual(newPost);
  });
});
