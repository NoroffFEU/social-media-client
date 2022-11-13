export function storage() {
  const localStorage = (function () {
    var storage = {};

    return {
      setItem: function (key, value) {
        storage[key] = value || "";
      },
      getItem: function (key) {
        return storage[key] || null;
      },
      removeItem: function (key) {
        delete storage[key];
      },
      getlength() {
        return Object.keys(storage).length;
      },
      key: function (i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      },
    };
  })();
  return localStorage;
}

//Source for the object define solution above: https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
