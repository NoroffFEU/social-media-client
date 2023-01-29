import { createPost } from "./create.js";

const TITLE = "test post";
const TAGS = ["tag1", "tag2", "tag3"];
const MEDIA = "https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const BODY = "Here is my new car";

const MOCKPOST = {
  title: (TITLE),
  tags: (TAGS),
  media: (MEDIA),
  body: (BODY),
};

function postSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(MOCKPOST),
  });
}

describe("Create Post", () => {
  it("The create item function returns a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => postSuccess());
    const post = await createPost(TITLE, TAGS, MEDIA, BODY);
    expect(post).toBe(MOCKPOST);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});