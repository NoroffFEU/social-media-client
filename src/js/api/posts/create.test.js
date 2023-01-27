import { createPost } from "./create";

const title = "title";
const body = "body";
const meta = "meta";
const tags = "tags";

const testObject = {
    title : title,
    body : body,
    meta : meta,
    tags : tags,
};

function fetchTestObject() {
    return Promise.resolve({
      status: 200,
      ok: true,
      statusText: "OK",
      json: () => Promise.resolve(testObject),
    });
  }

describe("createPost", () => {
    it("returns a valid item with valid input", async () => {
      global.fetch = jest.fn(() => fetchTestObject());
      const result = await createPost(testObject);
      expect(result.title).toEqual(testObject.title);
    });
  });