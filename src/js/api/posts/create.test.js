//The create item function returns a valid item with a valid input
import { createPost } from './create';

const MOCK_TITLE = 'Workflow';
const MOCK_BODY =
  'Create a mock code to test if functions work properly with NPM run test-unit';
const MOCK_MEDIA =
  'https://thumbs.dreamstime.com/z/happy-cat-closeup-portrait-funny-smile-cardboard-young-blue-background-102078702.jpg';
const MOCK_TAGS = 'cat, smile, funny, stock_image';

const MOCK_DATA = {
  title: MOCK_TITLE,
  body: MOCK_BODY,
  media: MOCK_MEDIA,
  tags: MOCK_TAGS,
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_DATA),
});

describe('createPost', () => {
  it('returns a valid item with a valid input', async () => {
    global.fetch = mockFetchSuccess;
    var results = await createPost(
      MOCK_TITLE,
      MOCK_BODY,
      MOCK_MEDIA,
      MOCK_TAGS
    );
    expect(results.title).toMatch(MOCK_TITLE);
    expect(results.body).toMatch(MOCK_BODY);
    expect(results.media).toMatch(MOCK_MEDIA);
    expect(results.tags).toMatch(MOCK_TAGS);
  });
});
