import { createPost } from "./create";

const TEST_TITLE = "I am looking forward to get this done!";
const TEST_BODY = "Just some small unit testing going on";
const TEST_MEDIA = "";
const TEST_TAGS = [""];

const TEST_POST = {
    body: TEST_BODY,
    created: "2022-11-19",
    id: 3030,
    media: "",
    tags: [""],
    title: TEST_TITLE,
    updated: "2022-11-19",
    count: { comments: 0, reactions: 0},
};

const MOCK_POST = JSON.stringify(TEST_POST);

function fetchSuccess() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "All OK",
        json: () => Promise.resolve(TEST_POST),
    });
}

function failFetch(status = 404, statusText = "Something went wrong") {
    return Promise.resolve({
        ok: false,
        status,
        statusText,
    });
}

describe("Creating a post", () => {
    it("Returns post data", async () => {
        global.fetch = jest.fn(() => fetchSuccess());
        const data = await createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAGS);
        const post = JSON.stringify(data);
        expect(typeof TEST_TITLE).toBe("string");
        expect(typeof TEST_BODY).toBe("string");
        expect(typeof TEST_MEDIA).toBe("string");
        expect(Array.isArray(TEST_TAGS)).toBe(true);
        expect(post).toMatch(MOCK_POST);
    });

    it("Returns an HTTP 400 error when wrong media type is used", async () => {
        global.fetch = jest.fn(() => failFetch(401, ""));
        await expect(createPost(TEST_TITLE, TEST_BODY, TEST_MEDIA, TEST_TAGS)).rejects.toThrow(new Error());
    });

    it("Returns an HTTP 401 error when there is no data provided", async () => {
        global.fetch = jest.fn(() => failFetch(401, ""));
        await expect(createPost()).rejects.toThrow(new Error());
    })
})