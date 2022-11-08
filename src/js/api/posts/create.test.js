import { createPost } from "./create.js";

const title = "Unit test";
const body = "I don't like unit testing";
const media = "";
const tags = "";
const failed_media = "";

const test_post = {
  title: "Unit test",
  body: "I don't like unit testing",
  media: "",
  tags: [" "],
  updated: "2022-11-08T10:56:41.552Z",
  id: 949,
};

const mock_post = JSON.stringify(test_post);

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: " ",
    json: () => Promise.resolve(test_post),
  });
}

function fetchFailure(status = 404, statusText = " ") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("Returns new post object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(title, body, media, tags);
    const post = JSON.stringify(response);
    expect(typeof title).toBe("string");
    expect(typeof body).toBe("string");
    expect(typeof media).toBe("string");
    expect(Array.isArray(tags)).toBe(false);
    expect(post).toMatch(mock_post);
  });

  it("Returns 400 error when provided with incorrect credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(createPost(title, body, tags, failed_media)).rejects.toThrow(
      " "
    );
  });
});
