import { createPost } from "./create";

const title = "testing title";
const body = "testing body";
const tag = "testing tag";

const response = {
  title,
  body,
  tag,
};

function successCreate() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...response }),
  });
}

function failCreate() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Bad Request",
  });
}

describe("create post", () => {
  it("creates new post", async () => {
    global.fetch = jest.fn(() => successCreate());
    const newPost = await createPost(title, body, tag);
    expect(newPost).toEqual(response);
    expect(newPost.title).toEqual(title);
    expect(newPost.body).toEqual(body);
    expect(newPost.tag).toEqual(tag);
  });

  it("fails to create a new post", async () => {
    global.fetch = jest.fn(() => failCreate());
    await expect(createPost(title, body, tag)).rejects.toThrow("Bad Request");
  });
});
