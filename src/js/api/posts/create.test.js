import { createPost } from './create.js';

// Adding several variable for using with the unit testing.

const TEST_TITLE = 'Monster Inc. Vol 99';
const TEST_BODY = 'This is my unit testing of post';
const TEST_MEDIA =
  'https://lumiere-a.akamaihd.net/v1/images/h_monstersinc_mobile_19751_af756177.jpeg?region=0,0,640,480';
const TEST_TAGS = ['Monster Inc'];
const TEST_CREATED_POST = `{"title":"${TEST_TITLE}","body":"${TEST_BODY}","tags":["${TEST_TAGS}"],"media":"${TEST_MEDIA}"}`;

/**
 * Creating a fake POST to send through the API
 * @param createPostSuccess
 * @returns TEST_CREATED_POST
 */

function createPostSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(JSON.parse(TEST_CREATED_POST)),
  });
}

describe('createPost', () => {
  it('Returns a response object with corresponding values for inputs', async () => {
    global.fetch = jest.fn(() => createPostSuccess());
    //login removes the accessToken from test object
    const response = await createPost(
      TEST_TITLE,
      TEST_BODY,
      TEST_MEDIA,
      TEST_TAGS
    );
    expect(response).toEqual(JSON.parse(TEST_CREATED_POST));
    expect(response.title).toEqual(TEST_TITLE);
    expect(response.body).toEqual(TEST_BODY);
    expect(response.media).toEqual(TEST_MEDIA);
    expect(response.tags).toEqual(TEST_TAGS);
  });
});
