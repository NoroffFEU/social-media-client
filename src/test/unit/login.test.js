import { login } from "../../js/api/auth/login";

export const localStorageMock = 
(function () {
 let store = [];
 return {
    getItem(key) {
        return store[key] || null;
    },
    setItem(key, value) {
        store[key] = value;
    },
    removeItem(key) {
        delete store[key];
    },
    clear() {
        store = {};
    },
 };
}) ();

global.localStorage = localStorageMock;

export const globalFetch = async function() {
    const profile = {
        accessToken: 'mockToken'
    }

    const response = {
        json: async () => profile,
        ok: true
    };
    
    return Promise.resolve(response);
}

global.fetch = globalFetch;

test('Login fetches and stores a token in browser storage', async () => {
    
    localStorage.clear()
    const beforeLogin = localStorage.getItem('token');

    await login();

    const afterLogin = localStorage.getItem('token');

    expect(beforeLogin).toEqual(null);
    expect(afterLogin).toEqual('\"mockToken\"');
  });