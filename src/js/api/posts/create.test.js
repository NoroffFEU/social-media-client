import { createPost } from "./create";

const TEST_ITEM = {
  title: "Unit-test test post",
  body: "Is this showing",
  tags: ["Unit-test, CA"],
  media: "https://miro.medium.com/max/640/0*KgLY3q-o0Ll9oJmf",
  created: "2022-11-12T13:51:05.876Z",
  updated: "2022-11-12T13:51:05.876Z",
  id: 2572,
  _count: {
    comments: 0,
    reactions: 0,
  },
};

function fetch() {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(TEST_ITEM),
  });
}

describe("Create item", () => {
  it("Creates a new item to the API", async () => {
    global.fetch = jest.fn(() => fetch());
    const newpost = await createPost();
    expect(newpost).toEqual(TEST_ITEM);
  });
});
