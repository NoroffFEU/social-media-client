import { remove } from './remove.js';

describe('remove()', () => {
  beforeEach(() => {
    const mockLocalStorage = {
      removeItem: jest.fn(),
    };
    global.localStorage = mockLocalStorage;
  });
  afterEach(() => {
    global.localStorage = undefined;
  });
  it('should remove token from local storage', () => {
    const mockToken = '23dasf+12jfawdfasdf';
    remove(mockToken);
    expect(global.localStorage.removeItem).toHaveBeenCalledWith(mockToken);
  });
});
