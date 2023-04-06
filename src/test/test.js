import { createPost } from "../js/api/posts/create";
import { title, body, media, tags, post } from "./test-variables.js";

function PostMockSuccess() {
    return Promise.resolve({
        status: 200,
        ok: true,
        statusText: "Approved",
        json: () => Promise.resolve(post),
    });
}

describe("create", () => {
    it("can create a valid item with a valid input", async () => {
        global.fetch = jest.fn(() => PostMockSuccess());
        const result = await createPost(title, body, media, tags);
        expect(result.title).toEqual(title);
        expect(result.body).toEqual(body);
        expect(result.media).toEqual(media);
        expect(result.tags).toEqual(tags);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});