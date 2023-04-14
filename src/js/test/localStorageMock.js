export const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },

    setItem(key, value) {
      store[key] = String(value);
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();
