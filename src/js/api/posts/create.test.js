import { createPost } from "./create.js";

const title = "title";
const body = "body";
const tags = "tag";
const media = "";

const post = {
  title: title,
  body: body,
  tags: tags,
  media: media,
};

const fetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  status: 200,
  json: jest.fn().mockResolvedValue(post),
});

global.fetch = fetchSuccess;

describe("create", () => {
  it("returns a valid item with a valid input", async () => {
    const postCreated = await createPost(title, body, media, tags);
    expect(postCreated).toMatchObject(post);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});