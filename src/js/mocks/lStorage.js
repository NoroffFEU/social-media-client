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

//Copied from the local-storage-mock package, i could not get it to work using "require('local-storage-mock')" so i copied the main.js and that worked
