/*each function (setItem, getItem, and removeItem)
is defined separately using jest.fn(), and then
they are assigned to the corresponding properties
of the object being exported */

const setItem = jest.fn((key, value) => {
  localStorage[key] = value;
});

const getItem = jest.fn((key) => {
  return localStorage[key] || null;
});

const removeItem = jest.fn((key) => {
  delete localStorage[key];
});

export default {
  setItem,
  getItem,
  removeItem,
};
