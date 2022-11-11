import { createPost } from "./create.js";

function notAuthorized() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

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
  
  it("should throw an error if the response is not ok", async () => {
    global.fetch = jest.fn(() => notAuthorized());
    await expect(
      createPost("title", "body", "media", "tags")
    ).rejects.toThrow("Unauthorized");
  });
});
