import { createPost } from "../api/posts/create";

const TEST_TITLE = "My Post Title";
const TEST_BODY = "my body";
const TEST_MEDIA =
  "https://themenewyork.mystore4.no/users/themenewyork_mystore_no/images/54099_Gucci_demo1111_1.png";
const TEST_MYTAGS = "testing";
const TEST_OBJECT = `{"title":"${TEST_TITLE}","body":"${TEST_BODY}","tags":"${TEST_MYTAGS}","media":"${TEST_MEDIA}"}`;

// Mock function for fetch success
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () =>
      Promise.resolve(JSON.parse(TEST_OBJECT)),
  });
}

// Mock function for fetch error
function fetchError(
  status = 404,
  statusText = `"Unauthorized" || "Bad request" || "Not Found"`
) {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

// Test function for createPost
describe("createPost", () => {
  it("checks that the create item function creates a new item on the API ", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_MYTAGS
    );
    expect(response).toEqual(
      JSON.parse(TEST_OBJECT)
    );
    expect(response.title).toEqual(TEST_TITLE);
    expect(response.body).toEqual(TEST_BODY);
    expect(response.media).toEqual(TEST_MEDIA);
    expect(response.tags).toEqual(TEST_MYTAGS);
  });

  it("Throws an error message", async () => {
    global.fetch = jest.fn(() => fetchError());
    await expect(
      createPost(
        TEST_TITLE,
        TEST_BODY,
        TEST_MEDIA,
        TEST_MYTAGS
      )
    ).rejects.toThrow(
      "Unauthorized" ||
        "Bad request" ||
        "Not Found"
    );
  });
});
