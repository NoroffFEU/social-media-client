import { createPost } from "./create";

const testTitle = "It's just a test";
const testBody = "Again it's a test";
const testMedia = "";
const testTags = "";
const testPost = {
  title: testTitle,
  body: testBody,
  media: testMedia,
  tags: testTags,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "Ok",
    json: () => Promise.resolve(testPost),
  });
}

describe("createPost", () => {
  it("Return the same values as testposts", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const post = await createPost(testTitle, testBody, testMedia, testTags);
    expect(post).toEqual(testPost);
  });
});
