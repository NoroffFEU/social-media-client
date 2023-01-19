import { createPost } from "./create";

const TEST_TITLE = "title";
const TEST_BODY = "test body";
const TEST_MEDIA =
  "https://images.pexels.com/photos/1769271/pexels-photo-1769271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const TEST_TAGS = "tag";
const TEST_POST = {
  title: TEST_TITLE,
  body: TEST_BODY,
  media: TEST_MEDIA,
  tags: TEST_TAGS,
};

/**
 * A function that mimicks an approved API fetch call
 */
function PostMockSuccess() {
  return Promise.resolve({
    status: 200,
    ok: true,
    statusText: "Approved",
    json: () => Promise.resolve(TEST_POST),
  });
}

describe("create", () => {
  it("can create a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => PostMockSuccess());
    const result = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAGS
    );
    expect(result.title).toEqual(TEST_TITLE);
    expect(result.body).toEqual(TEST_BODY);
    expect(result.media).toEqual(TEST_MEDIA);
    expect(result.tags).toEqual(TEST_TAGS);
  });
});
