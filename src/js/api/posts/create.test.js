import { createPost } from "./create";

const testPost = {
  title: "testing",
  body: "testing",
  media: "testing",
  tags: "testing",
};

function postSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(testPost),
  });
}

describe("create post function", () => {
  it("Creates a post to the API", async () => {
    global.fetch = jest.fn(() => postSuccess());
    const post = await createPost(testPost);
    expect(post).toEqual(testPost);
  });
});
