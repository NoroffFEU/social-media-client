import { logout } from "../../js/api/auth/logout";
import { localStorageMock } from "./login.test";
import { globalFetch } from "./login.test";

global.localStorage = localStorageMock;

global.fetch = globalFetch;

test('Logout function clears the token from browser storage', () => {
    
    localStorage.setItem('mockToken');
    const beforeLogout = localStorage.getItem('token');
    
    logout();

    const afterLogout = localStorage.getItem('token');

    expect(beforeLogout).toEqual('\"mockToken\"');
    expect(afterLogout).toEqual(null);
  });