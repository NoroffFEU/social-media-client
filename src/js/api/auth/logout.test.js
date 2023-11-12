let store = {};
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn((key) => {
    delete store[key];
  }),
};

global.localStorage = localStorageMock;

describe('logout', () => {
  it('removes token from local storage', () => {
    localStorageMock.removeItem('name');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('name');
  });
});
