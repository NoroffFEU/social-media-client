import { createPost } from "./create.js";

const title = "here is the title";
const body = "here is the body";
const media = "urlcomeshere";
const tags = "tags comes here";

const successResponse = {
  title: "test",
  body: "testtesttest",
  tags: ["test"],
  media: "",
  reactions: [],
  comments: [],
  created: "2022-11-11T22:39:14.042Z",
  updated: "2022-11-11T22:39:14.042Z",
  id: 2519,
  author: {
    name: "snekksnekk",
    email: "snekksnekk@noroff.no",
    avatar:
      "https://imgs.search.brave.com/h4X0Hds_mt2b-jj6y3aaJflpJDAW1ZJrMnaPt-iVn_4/rs:fit:561:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/RlZwZVhXY0NvZXQ0/QUJ3MFBPOVRRSGFH/USZwaWQ9QXBp",
    banner: null,
  },
  _count: { comments: 0, reactions: 0 },
};

function successCall(param) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(param),
  });
}

function failingCall() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Bad Request",
  });
}

describe("createPost", () => {
  it("Returns a response object with corresponding values for inputs", async () => {
    global.fetch = jest.fn(() => successCall(successResponse));
    const request = await createPost(title, body, media, tags);
    expect(request).toEqual(successResponse);
  });
  it("Throws an error message if request was bad", async () => {
    global.fetch = jest.fn(() => failingCall());
    await expect(createPost(title, body, media, tags)).rejects.toThrow(
      "Bad Request"
    );
  });
});
