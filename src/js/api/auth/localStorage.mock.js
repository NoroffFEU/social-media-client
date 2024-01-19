// localStorageMock is from Oliver's workflow session 18.jan-2024 on unit-testing with jest

export default {
  setItem: jest.fn((key, value) => (localStorage[key] = value)),
  getItem: jest.fn((key) => localStorage[key] || null),
  removeItem: jest.fn((key) => delete localStorage[key]),
};
