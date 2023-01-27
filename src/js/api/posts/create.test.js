import { createPost } from "./create";

const title = "title";
const body = "test-body";
const media = "https://picsum.photos/seed/picsum/200/300";
const tags = "tag";
const post = {
  title: title,
  body: body,
  media: media,
  tags: tags,
};

function PostSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(post),
  });
}

describe("create", () => {
  it("create a valid item with a valid title and body", async () => {
    global.fetch = jest.fn(() => PostSuccess());
    const result = await createPost(title, body, media, tags);
    expect(result.title).toEqual(title);
    expect(result.body).toEqual(body);
    expect(result.media).toEqual(media);
    expect(result.tags).toEqual(tags);
  });
});
