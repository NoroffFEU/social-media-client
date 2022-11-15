import { createPost } from "./create";

const TEST_POST = {
  title: "this is title",
  body: "boooooooddyyyy",
  media: "media.url",
  tags: "testTags",
};

// fetch success mock, with TEST_POST object as the return.
function fetchOk() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_POST),
  });
}

describe("createPost", () => {
  it("Creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchOk());
    // calling createPost with the TEST_POST properties as parameters.
    const post = await createPost(
      TEST_POST.title,
      TEST_POST.body,
      TEST_POST.media,
      TEST_POST.tags
    );
    expect(post).toEqual(TEST_POST);
  });
});
