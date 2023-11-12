import { createPost } from "./create";
import {
  fetchSuccess,
  fetchUnauthorized,
  fetchBadRequest,
} from "../../mocks/fetch";
const TEST_TITLE = "Jesting";
const TEST_BODY = "Oh the joys of unit testing!";
const TEST_MEDIA =
  "https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg";
const TEST_TAGS = ["Jest", "Test", "Rest"];
const TEST_BAD_TAGS = "Jest, Test, Rest";
const TEST_SUCCESS_RESPONSE = `{"title":"Jesting","body":"Oh the joys of unit testing!","tags":["Jest","Test","Rest"],"media":"https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg","created":"2022-11-02T00:17:18.803Z","updated":"2022-11-02T00:17:18.803Z","id":121,"_count":{"comments":0,"reactions":0}}`;

describe("createPost", () => {
  it("Returns a response object with corresponding values for inputs", async () => {
    global.fetch = jest.fn(() => fetchSuccess(TEST_SUCCESS_RESPONSE));
    //login removes the accessToken from test object
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAGS
    );
    const postData = JSON.parse(response);
    expect(postData).toEqual(JSON.parse(TEST_SUCCESS_RESPONSE));
    expect(postData.title).toEqual(TEST_TITLE);
    expect(postData.body).toEqual(TEST_BODY);
    expect(postData.media).toEqual(TEST_MEDIA);
    expect(postData.tags).toEqual(TEST_TAGS);
  });

  it("Throws an error message if request was bad", async () => {
    global.fetch = jest.fn(() => fetchBadRequest());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_BAD_TAGS)
    ).rejects.toThrow("Bad Request");
  });

  it("Throws an error message if request was unauthorized", async () => {
    global.fetch = jest.fn(() => fetchUnauthorized());
    await expect(
      createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_BAD_TAGS)
    ).rejects.toThrow("Unauthorized");
  });
});
