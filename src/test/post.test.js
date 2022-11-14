import { createPost } from "../js/api/posts/create.js";
import { login } from "../js/api/auth/login";

const email = "testingss@noroff.no";
const password = "asdf1234";

const title = "Testing";
const body = "testing with unit test";

describe("The create item function creates a new item on the API", function () {
  it("Can create a new item on the API", async () => {
    await login(email, password);
    const data = await createPost(title, body);
    expect(data.title).toEqual(title);
  });
});
