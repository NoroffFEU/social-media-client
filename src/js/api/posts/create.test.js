import { createPost } from "./create"; 

const TEST_TITLE = "Test title"; 
const TEST_BODY = "Test body"; 
const TEST_MEDIA = "img"; 
const TEST_TAGS = "Testtag"; 

const TEST_POST = {
    title: TEST_TITLE,
    body: TEST_BODY,
    media: TEST_MEDIA,
    tags: TEST_TAGS,
}

// The create item function returns a valid item with a valid input

function postMockSuccess() {
    return Promise.resolve({
        status: 200,
        ok: true, 
        statusText: "Success", 
        json: () => Promise.resolve(TEST_POST),
    });
}

describe("create", () => {
    it("can create a valid item with a valid input", async () => {
       global.fetch = jest.fn(() => postMockSuccess()); 
       const result = await createPost(
        TEST_TITLE,
        TEST_BODY,
        TEST_MEDIA,
        TEST_TAGS
      );
      expect(result).toEqual(TEST_POST);
  
    });
});