import { createPost } from "./create";

const TEST_TITLE =
  "There's only one word in the dictionary that's spelled wrong. What is it?";
const TEST_BODY = " ";
const TEST_MEDIA = " ";
const TEST_TAGS = [" "];

const TEST_POST = {
  body: " ",
  created: "2022-11-06T09:30:20.999Z",
  id: 523,
  media: " ",
  tags: [" "],
  title:
    "There's only one word in the dictionary that's spelled wrong. What is it?",
  updated: "2022-11-06T09:30:20.999Z",
  count: { comments: 0, reactions: 0 },
};

const MOCK_POST = JSON.stringify(TEST_POST);

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: " ",
    json: () => Promise.resolve(TEST_POST),
  });
}

//source: https://stackoverflow.com/questions/62564800/how-to-assert-data-type-with-jest
describe("createPost", () => {
  it("Returns a new post data", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const data = await createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAGS);
    const post = JSON.stringify(data);
    expect(typeof TEST_TITLE).toBe("string");
    expect(typeof TEST_BODY).toBe("string");
    expect(typeof TEST_MEDIA).toBe("string");
    expect(Array.isArray(TEST_TAGS)).toBe(true);
    expect(post).toMatch(MOCK_POST);
  });
});
