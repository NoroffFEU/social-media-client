import { createPost } from "./create";

const Test_Title = "Test_Title";
const Test_Body = "Test_Body";
const Test_Media = "";
const Test_Tags = "Test_tags";

const Test_post = {
  title: Test_Title,
  body: Test_Body,
  media: Test_Media,
  tags: Test_Tags,
};

/**
 * A mock fetch function that represents a successful fetch API call
 */

function MockPostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "Approved",
    json: () => Promise.resolve(Test_post),
  });
}

describe("create", () => {
  it("creates a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => MockPostSuccess());
    const result = await createPost(
      Test_Title,
      Test_Body,
      Test_Media,
      Test_Tags
    );
    expect(result).toEqual(Test_post);
  });
});
