import { createPost } from "../create";

const requestObject = {
  title: "string", // Required
  body: "string", // Optional
  tags: ["string"], // Optional
  media: "https://url.com/image.jpg", // Optional
};
const badRequestObject = {
  title: [], // Required
  body: 99, // Optional
  tags: ["string"], // Optional
  media: "https://url.com/image.jpg", // Optional
};

const responseObject = {
  id: 0,
  title: "string",
  body: "string",
  tags: ["string"],
  media: "https://url.com/image.jpg",
  created: "2022-09-04T16:21:02.042Z",
  updated: "2022-09-04T16:21:02.042Z",
  _count: {
    comments: 0,
    reactions: 0,
  },
};

function fetchSuccess(res) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "respone status: ok",
    json: () => Promise.resolve(res),
  });
}

function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("create", () => {
  it("creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess(responseObject));
    const { title, body, media, tags } = requestObject;
    const resObjectFromServer = await createPost(title, body, media, tags);
    expect(resObjectFromServer).toEqual(responseObject);
  });
  it("Throws: Error 'Not Found' when given incorrect data", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    const { title, body, media, tags } = badRequestObject;
    await expect(createPost(title, body, media, tags)).rejects.toThrow(
      "Not Found"
    );
  });
});
