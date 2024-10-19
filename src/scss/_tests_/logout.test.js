import { logout } from '../../js/api/index';
import { remove } from '../../js/storage/index';

jest.mock('../../js/storage');

beforeEach(() => {
	jest.clearAllMocks();
	global.fetch = jest.fn();
});
describe('logout', () => {
	const tokenKey = 'token';
	const profileKey = 'profile';

	it('should clear the token from browser storage', () => {
		logout();
		expect(remove).toHaveBeenCalledWith(tokenKey);
		expect(remove).toHaveBeenCalledWith(profileKey);
	});

	it('should handle errors during logout', () => {
		remove.mockImplementationOnce(() => {
			throw new Error('Storage error');
		});

		// expect(() => logout()).toThrow('Logout failed');
		expect(() => logout()).toThrow('Storage error');
	});
});
