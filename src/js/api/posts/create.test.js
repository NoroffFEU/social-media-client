import createPost from "./create.js";

describe("createPost", () => {
  it("should create a post", async () => {
    const response = await createPost("title", "body", "media", "tags");
    expect(response).toEqual({
      id: 1,
      title: "title",
      body: "body",
      media: "media",
      tags: "tags",
    });
  });
});
