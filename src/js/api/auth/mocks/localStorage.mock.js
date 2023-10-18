export const localStorageMock = {
  setItem: jest.fn((key, value) => {
    localStorage[key] = value;
  }),
  removeItem: jest.fn((key) => {
    delete localStorage[key];
  }),
};
