const storageFix = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = {
    getItem: storageFix.getItem,
    setItem: storageFix.setItem,
    removeItem: storageFix.removeItem,
    clear: storageFix.clear,
  };
  
  import { logout } from './logout';
  
  describe('logout', () => {
    it('removes the access token ', () => {

      localStorage.setItem('token', 'yourAccessToken');

      logout();

      expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  
      expect(localStorage.getItem('token')).toBeUndefined();
    });
  });