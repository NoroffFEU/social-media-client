import { createPost } from "./create";

const TEST_CREATE_POST = {
  title: "This is title",
  body: "This is body",
  media: "url",
  tags: ["tag1", "tag2"],
};

const TEST_TITLE = "This is title";
const TEST_BODY = "This is body";
const TEST_MEDIA = "url";
const TEST_TAGS = ["tag1", "tag2"];
/**
 * A mock fetch function that fetches unsuccessfully
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "success",
    json: () => Promise.resolve(TEST_CREATE_POST),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 */
function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "undifiend",
  });
}

describe("createPost", () => {
  it("creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAGS
    );
    expect(response).toEqual(TEST_CREATE_POST);
  });

  it("Failed to creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAGS)
    ).rejects.toThrow("undifiend");
  });
});
