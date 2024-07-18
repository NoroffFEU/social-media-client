import { register } from '../register';

describe('User Registration', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should show 400 error when trying to register a user', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ error: 'There was a problem creating your account' }),
      { status: 400 }
    );

    try {
      await register('testuser', 'test@example.com', 'password', 'avatarUrl', 'bannerUrl');
    } catch (error) {
      expect(error.response.status).toBe(400);
      const errorResponse = await error.response.json();
      expect(errorResponse.error).toBe('There was a problem creating your account');
    }
  });
});
