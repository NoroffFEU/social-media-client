import { createPost } from "./create";

const title = "title";
const body = "body";
const media = "media";
const tags = "tags";

const post = {
  title: "title",
  body: "body",
  media: "media",
  tags: "tags",
};

function createSuccess(status = 200, statusText = "OK") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(post),
  });
}

function createFail(status = 401, statusText = "Unautohorized") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("Creates a new post successfully", async () => {
    global.fetch = jest.fn(() => createSuccess());
    const data = await createPost(title, body, media, tags);
    expect(data).toEqual(post);
  });
});
