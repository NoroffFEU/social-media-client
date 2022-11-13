import { createPost } from "./create";

const TITLE = "Unit-test test post";
const BODY = "Is this showing";
const TAGS = ["Unit-test, CA"];
const MEDIA = "https://miro.medium.com/max/640/0*KgLY3q-o0Ll9oJmf";

const TEST_ITEM = {
  title: TITLE,
  body: BODY,
  tags: TAGS,
  media: MEDIA,
};

function mockCreatePost() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_ITEM),
  });
}

function mockFailCreatePost() {
  return Promise.resolve({
    ok: false,
    statusText: "Bad request",
  });
}

describe("createPost", () => {
  it("Creates a new item to the API", async () => {
    global.fetch = jest.fn(() => mockCreatePost());
    const newpost = await createPost(TITLE, BODY, TAGS, MEDIA);
    expect(newpost).toEqual(TEST_ITEM);
  });

  it("Fails to create a new item to the API", async () => {
    global.fetch = jest.fn(() => mockFailCreatePost());
    await expect(createPost).rejects.toThrow("Bad request");
  });
});
