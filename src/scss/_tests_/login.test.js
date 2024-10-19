import { login } from '../../js/api/auth/login.js'; // Adjust the path
import { save } from '../../js/storage/index';

jest.mock('../../js/storage');

describe('Authentication', () => {
	const mockCredentials = {
		email: 'user@example.com',
		password: 'password123',
	};

	beforeEach(() => {
		jest.clearAllMocks();
		global.fetch = jest.fn();
	});

	describe('login', () => {
		it('should store a token and profile when provided with valid credentials', async () => {
			const mockToken = 'valid_token';
			const mockProfile = {
				name: 'mockName',
				email: 'mockemail@email.com',
				banner: null,
				avatar:
					'https://wiki.tripwireinteractive.com/TWIimages/4/47/Placeholder.png',
			};

			global.fetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({
						name: mockProfile.name,
						email: mockProfile.email,
						banner: mockProfile.banner,
						avatar: mockProfile.avatar,
						accessToken: mockToken,
					}),
			});

			await login(mockCredentials);

			expect(save).toHaveBeenCalledWith('token', mockToken);
			expect(save).toHaveBeenCalledWith('profile', mockProfile);
		});

		it('should throw a generic error with invalid credentials (current behavior)', async () => {
			global.fetch.mockResolvedValueOnce({
				ok: false,
				json: () => Promise.resolve({ message: 'Invalid credentials' }),
			});

			await expect(login(mockCredentials)).rejects.toThrow('Login failed');
		});

		it('should throw a specific error with invalid credentials', async () => {
			global.fetch.mockResolvedValueOnce({
				ok: false,
				json: () => Promise.resolve({ message: 'Invalid credentials' }),
			});
			await expect(login(mockCredentials)).rejects.toThrow(
				'Invalid credentials'
			);
		});

		it('should handle network errors (current behavior - may fail)', async () => {
			global.fetch.mockRejectedValueOnce(new Error('Network error'));

			await expect(login(mockCredentials)).rejects.toThrow('Network error');
		});

		it('should handle errors when save fails', async () => {
			const mockToken = 'valid_token';
			global.fetch.mockResolvedValueOnce({
				ok: true,
				json: () => Promise.resolve({ accessToken: mockToken }),
			});

			save.mockImplementationOnce(() => {
				throw new Error('Storage failure');
			});

			await expect(login(mockCredentials)).rejects.toThrow('Storage failure');
		});
	});
});
