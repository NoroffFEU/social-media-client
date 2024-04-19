import { login } from './login.js';
import { save } from '../../storage/index.js';

global.fetch = jest.fn();
jest.mock('../../storage/index.js');

describe('login', () => {
	it('successful login', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => ({ accessToken: 'token123', user: 'John' }),
		});

		const result = await login('email@test.com', 'password123');

		expect(save).toHaveBeenCalledWith('token', 'token123');
		expect(save).toHaveBeenCalledWith('profile', { user: 'John' });
		expect(result).toEqual({ user: 'John' });
	});

	it('unsuccessful login', async () => {
		fetch.mockResolvedValueOnce({ ok: false, statusText: 'Unauthorized' });

		await expect(login('email@test.com', 'wrongpassword')).rejects.toThrow('Unauthorized');
	});
});
