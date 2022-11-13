import { createPost } from "./create";

const createValidTest = {
  title: "What a nice day",
  body: "take a long walk",
  media: "url",
  tags: ["hey", "fun"],
};

const { title, body, media, tags } = createValidTest;

const createInvalidTest = {
  title: "What a nice day",
  body: "take a long walk",
  media: "url",
  tags: "hey, fun",
};

const postData = {
  title: title,
  body: body,
  media: media,
  tags: tags,
};

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "success",
    json: () => Promise.resolve(createValidTest),
  });
}

function fetchFail(status = 404, statusText = "invalid") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("createPost", () => {
  it("Creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const test = await createPost(postData);
    expect(test).toEqual(createValidTest);
  });

  it("Throws an error if the request is invalid", async () => {
    global.fetch = jest.fn(() => fetchFail());
    await expect(createPost(createInvalidTest)).rejects.toThrow("invalid");
  });
});
