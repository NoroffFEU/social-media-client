import { createPost } from "./create.js";

describe("createPost", () => {
  it("should create a post to the api", async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            title: "title",
            body: "body",
            media: "media",
            tags: "tags",
          });
        },
      });
    });
    const post = await createPost("title", "body", "media", "tags");
    expect(post).toEqual({
      title: "title",
      body: "body",
      media: "media",
      tags: "tags",
    });
  });
});
