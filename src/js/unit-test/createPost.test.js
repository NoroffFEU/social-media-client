import { createPost } from "../api/posts/create";
import { login } from "../api/auth/login";

it("check creat post", async () => {
    await login("albertt@noroff.no", "albertalbert");
    const response = await createPost("her er title", "her er body");
    expect(response.title).toEqual("her er title", "her er body");
});
