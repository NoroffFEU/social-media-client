import { createPost } from "./create";

const POST = {
  title: "New post",
  body: "This is the content",
  media: null,
  tags: [],
};

const NEWPOST = {
  created: new Date(),
  updated: new Date(),
  id: 100,
  _count: {
    comments: 0,
    reactions: 0,
  },
  ...POST,
};

function validPost() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: jest.fn().mockResolvedValue(NEWPOST),
  });
}

describe("createPost", () => {
  it("returns a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => validPost());
    const newPost = await createPost(
      POST.title,
      POST.body,
      POST.media,
      POST.tags
    );
    expect(newPost).toEqual(NEWPOST);
  });
});
