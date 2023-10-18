export default {
  setItem: jest.fn((key, value) => {
    localStorage[key] = value;
  }),
  removeItem: jest.fn((key) => {
    delete localStorage[key];
  }),
};
