const localStorageMock = {
  store: {},
  setItem(key, value) {
    this.store[key] = value.toString(); // Ensure value is stored as a string
  },
  getItem(key) {
    const value = this.store[key];
    return value ? value : null; // Return null if key doesn't exist
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {}; // Clear the entire storage
  },
};

export default localStorageMock;
