import { createPost } from './create';

const MOCK_DATA = {
  title: 'testing',
  body: 'first post',
  media: 'https://images.unsplash.com/photo-1669158424143-3be4e002b36=80',
  id: 232,
};

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_DATA),
});

global.fetch = mockFetchSuccess;

describe('createPost', () => {
  it('should create a post', async () => {
    const response = await createPost(MOCK_DATA);
    expect(response).not.toBeUndefined();
  });
});
