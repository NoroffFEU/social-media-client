import { logout } from './logout';
import { remove } from '../../storage';

jest.mock('../../storage', () => {
  /* Create createLocalStorageMock inside the mock */
  function createLocalStorageMock() {
    let store = {};

    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      clear: function () {
        store = {};
      },
      removeItem: function (key) {
        delete store[key];
      },
    };
  }

  const localStorageMock = createLocalStorageMock();

  return {
    ...jest.requireActual('../../storage'),
    remove: jest.fn((key) => {
      localStorageMock.removeItem(key);
    }),
    localStorageMock: localStorageMock,
  };
});

describe('logout function test', () => {
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = require('../../storage').localStorageMock;
    localStorageMock.setItem('token', 'sampleToken');
  });

  it('should remove token from browser storage and check is it null', () => {
    logout();
    expect(remove).toHaveBeenCalledWith('token');
    const token = localStorageMock.getItem('token');
    expect(token).toBeNull();
  });
});
