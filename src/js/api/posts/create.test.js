import { createPost } from "./create.js";

const titleTester = "tThis is a Title";
const bodyTester = "What a great body";
const mediaTester =
  "https://i1.sndcdn.com/artworks-qOckgPHQ5gufdukI-yK763g-t500x500.jpg";
const tagTester = "cool";

const post = {
  title: titleTester,
  body: bodyTester,
  media: mediaTester,
  tag: tagTester,
};

function postSuccess(status = 201, statusText = "Post created!") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(post),
  });
}

function postFail(status = 404, statusText = "Post failed") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("create post", () => {
  it("Creates a new post", async () => {
    globalThis.fetch = jest.fn(() => postSuccess());
    const data = await createPost(
      titleTester,
      bodyTester,
      mediaTester,
      tagTester
    );
    expect(data).toEqual(post);
    expect(titleTester).toBeDefined();
    expect(data.tag).toEqual(tagTester);
    expect(data.title).toEqual(titleTester);
    expect(data.media).toEqual(mediaTester);
    expect(data.body).toEqual(bodyTester);
    expect(mediaTester).toMatch(/\.(jpg|jpeg|png|webp|avif|gif)(?=\?.+|$)/);
  });

  it("Displays an error if the post fails", async () => {
    globalThis.fetch = jest.fn(() => postFail());
    await expect(
      createPost(titleTester, bodyTester, mediaTester, tagTester)
    ).rejects.toThrow("Post created failed");
  });
});
