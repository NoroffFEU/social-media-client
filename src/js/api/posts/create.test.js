import { createPost } from "./create";
import { fetchSuccess } from "../../mocks/fetchSuccess";

const title = "A post title";
const body = "This is some text for the post";
const media = "https://wwww.aPictureLink.thatsFake";
const tags = ["one", "two", "three"];
const ok = true;

const responseObject = { title, body, media, tags, ok };
const response = JSON.stringify(responseObject);

test("It posts data to the 'api'", async () => {
  global.fetch = jest.fn(() => fetchSuccess(response));

  const testResponse = await createPost(title, body, media, tags);
  const parsedResponse = await JSON.parse(testResponse);

  expect(parsedResponse.title).toEqual("A post title");
  expect(parsedResponse.body).toEqual("This is some text for the post");
  expect(parsedResponse.media).toEqual("https://wwww.aPictureLink.thatsFake");
  expect(parsedResponse.tags).toEqual(["one", "two", "three"]);
  expect(parsedResponse.ok).toBeTruthy();
});
