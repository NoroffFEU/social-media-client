import { load } from '../src/js/storage/load.js';

beforeEach(() => {
  global.localStorage = {
    store: {},
    getItem: function (key) {
      return this.store[key] || null;
    },
    setItem: function (key, value) {
      this.store[key] = value.toString();
    },
    removeItem: function (key) {
      delete this.store[key];
    },
    clear: function () {
      this.store = {};
    },
  };
});

describe('Storage load function', () => {
  it('should return the value from localStorage', () => {
    localStorage.setItem('key', JSON.stringify('test-value'));
    const value = load('key');
    expect(value).toBe('test-value');
  });

  it('should return null if the value cannot be parsed', () => {
    localStorage.setItem('key', 'invalid-json');
    const value = load('key');
    expect(value).toBeNull();
  });
});
