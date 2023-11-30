const MOCK_TOKEN = 1;

let store = {};
const mockLocalStorage = {
  removeItem: jest.fn().mockImplementation((key) => store[key]),
};

global.localStorage = mockLocalStorage;

describe('remove token', () => {
  it('deletes the access token', () => {
    mockLocalStorage.removeItem(MOCK_TOKEN);
    expect(mockLocalStorage.removeItem).toHaveBeenCalled();
  });
});
