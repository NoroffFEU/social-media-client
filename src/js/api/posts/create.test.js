import { createPost } from "./create.js";

const title = "Title";
const body = "Body";
const tags = ["tag", "tags", "tagtastic"];
const media = "https://coolestimageintheworld.com/image.jpg";

const response = {
  title: title,
  body: body,
  tags: tags,
  media: media,
  created: "2023-01-23T21:21:19.224Z",
  updated: "2023-01-23T21:21:19.224Z",
  id: 6666,
  _count: {
    comments: 0,
    reactions: 0,
  },
};

function fetchSuccess() {
  return Promise.resolve({
    json: () => Promise.resolve(response),
    status: 200,
    statusText: "OK",
    ok: true,
  });
}

describe("create", () => {
  it("creates an item function that returns a valid item with a valid input", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const result = await createPost(title, body, media, tags);
    expect(result).toEqual(response);
  });
});
