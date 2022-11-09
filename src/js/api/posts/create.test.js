import { createPost } from "./create";

const title = "Test title";
const body = "Test body";

const badTitle = 123;
const badBody = false;

const postData = {
    title,
    body
};

const createSuccess = () => {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve({...postData})
    })
};

const createFailure = () => {
    return Promise.resolve({
        ok: false,
        status: 400,
        statusText: "Bad Request"
    });
};

describe("createPost", () => {
    it("returns a post object if fed proper data", async () => {
        global.fetch = jest.fn(() => createSuccess());
        const response = await createPost(title, body);
        expect(response).toEqual(postData);
    });
    it("throws an error if fed bad data", async () => {
        global.fetch = jest.fn(() => createFailure());
        await expect(createPost(badTitle, badBody)).rejects.toThrow("Bad Request");
    })
});