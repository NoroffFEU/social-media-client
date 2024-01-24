import { logout } from './logout.js';
import { remove } from '../../storage/index.js';

jest.mock('../../storage/index.js');

describe('logout', () => {
	it('should remove token and profile', () => {
		logout();
		expect(remove).toHaveBeenCalledWith('token');
		expect(remove).toHaveBeenCalledWith('profile');
	});
});
