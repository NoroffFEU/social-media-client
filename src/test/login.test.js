import { login } from '../js/api/auth/login.js';
import { save } from '../js/storage/save.js';
import { apiPath } from '../js/api/constants.js';

// Mock the save function to verify it was called correctly
jest.mock('../js/storage/save.js', () => ({
  save: jest.fn(),
}));

describe('login function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('stores a token when provided with valid credentials', async () => {
    // Arrange: Set up the expected behavior
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        accessToken: 'mockAccessToken',
        otherData: 'someValue',
      }),
    };

    // Mock fetch to return a successful response
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Act: Call the login function with the mock credentials
    const profile = await login(mockEmail, mockPassword);

    // Assert: Verify that save was called with the correct arguments
    expect(save).toHaveBeenCalledWith('token', 'mockAccessToken');
    expect(save).toHaveBeenCalledWith('profile', { otherData: 'someValue' });
    expect(profile).toEqual({ otherData: 'someValue' });

    // Verify that fetch was called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: 'post',
      body: JSON.stringify({ email: mockEmail, password: mockPassword }),
      headers: expect.any(Object), // Check that headers were provided
    });
  });
});
