export default {
  setItem(key, value) {
    localStorage[key] = value;
  },
  getItem(key) {
    return localStorage[key] || null;
  },
  removeItem(key) {
    delete localStorage[key];
  },
  clear() {
    Object.keys(localStorage).forEach((key) => delete localStorage[key]);
  },
};
