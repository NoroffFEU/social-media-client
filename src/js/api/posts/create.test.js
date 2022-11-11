import { createPost } from "./create";

// The good, the bad, the ug-... unauthorized.
function createPostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(createPostSuccessResponse),
  });
}

function createPostBadRequest() {
  return Promise.resolve({
    ok: false,
    status: 400,
    statusText: "Bad Request",
  });
}

function createPostUnauthorized() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Unauthorized",
  });
}

const testTitle = "testJest";
const testBody = "Not very fun to be a jester honestly";
const testMedia =
  "https://isorepublic.com/wp-content/uploads/2022/10/iso-republic-fall-office-candle-1100x762.jpg";
const testTags = ["Good", "Working", "Tags"];
const testBadTags = "Not, so, great, 'tags'";
const createPostSuccessResponse = `{"title":"testJest","body":"Not very fun to be a jester honestly","media":"https://isorepublic.com/wp-content/uploads/2022/10/iso-republic-fall-office-candle-1100x762.jpg","tags":["Good", "Working", "Tags"],"created":"2022-11-11T00:15:22.803Z","updated":"2022-11-11T00:15:22.803Z","id":69,"_count":{"comments":0,"reactions":0}}`;

describe("Create a post", () => {
  it("returns a post with the successfully filled in data", async () => {
    global.fetch = jest.fn(() => createPostSuccess(createPostSuccessResponse));

    const response = await createPost(testTitle, testBody, testMedia, testTags);
    const postData = JSON.parse(response);
    expect(postData).toEqual(JSON.parse(createPostSuccessResponse));
    expect(postData.title).toEqual(testTitle);
    expect(postData.body).toEqual(testBody);
    expect(postData.media).toEqual(testMedia);
    expect(postData.tags).toEqual(testTags);
  });

  it("returns with a error 'bad request' if it went wrong", async () => {
    global.fetch = jest.fn(() => createPostBadRequest());
    await expect(
      createPost(testTitle, testBody, testMedia, testBadTags)
    ).rejects.toThrow("Bad Request");
  });

  it("throws an error if poster is not authorized to post", async () => {
    global.fetch = jest.fn(() => createPostUnauthorized());
    await expect(
      createPost(testTitle, testBody, testMedia, testBadTags)
    ).rejects.toThrow("Unauthorized");
  });
});
