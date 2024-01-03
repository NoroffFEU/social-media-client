import { login } from './login.js';
import { save } from '../../storage/index.js';

jest.mock('../../storage/index.js');

describe('login function', () => {
  it('should store a token', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ accessToken: 'mockToken', someOtherData: 'data' }),
      })
    );

    await login('dangfart@noroff.no', 'test123456!');

    expect(save).toHaveBeenCalledWith('token', 'mockToken');
  });
});
