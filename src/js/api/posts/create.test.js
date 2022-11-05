import { createPost } from "./create";
const TEST_TITLE = "Jesting";
const TEST_BODY = "Oh the joys of unit testing!";
const TEST_MEDIA =
  "https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg";
const TEST_TAGS = ["Jest", "Test", "Rest"];
const TEST_BAD_TAGS = "Jest, Test, Rest";
const TEST_SUCCESS_RESPONSE = `{"title":"Jesting","body":"Oh the joys of unit testing!","tags":["Jest","Test","Rest"],"media":"https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg","created":"2022-11-02T00:17:18.803Z","updated":"2022-11-02T00:17:18.803Z","id":121,"_count":{"comments":0,"reactions":0}}`;

/**
 * A mock fetch function that fetches a post successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 * @example
 * global.fetch = jest.fn(() => createSuccess())
 */
function createSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(JSON.parse(TEST_SUCCESS_RESPONSE)),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully with "Bad Request"
 * @example
 * global.fetch = jest.fn(() => createBadRequest())
 */
function createBadRequest() {
  return Promise.resolve({
    ok: false,
    status: 400,
    statusText: "Bad Request",
  });
}

/**
 * A mock fetch function that fetches unsuccessfully with "Unauthorized"
 * @example
 * global.fetch = jest.fn(() => createUnauthorized())
 */
function createUnauthorized() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

describe("createPost", () => {
  it("Returns a response object with corresponding values for inputs", async () => {
    global.fetch = jest.fn(() => createSuccess());
    //login removes the accessToken from test object
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAGS
    );
    expect(response).toEqual(JSON.parse(TEST_SUCCESS_RESPONSE));
    expect(response.title).toEqual(TEST_TITLE);
    expect(response.body).toEqual(TEST_BODY);
    expect(response.media).toEqual(TEST_MEDIA);
    expect(response.tags).toEqual(TEST_TAGS);
  });

  it("Throws an error message if request was bad", async () => {
    global.fetch = jest.fn(() => createBadRequest());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_BAD_TAGS)
    ).rejects.toThrow("Bad Request");
  });

  it("Throws an error message if request was unauthorized", async () => {
    global.fetch = jest.fn(() => createUnauthorized());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_BAD_TAGS)
    ).rejects.toThrow("Unauthorized");
  });
});
