// Mock localStorage
const localStorageMock = (function() {
    let store = {};
    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      }
    };
  })();
  
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });
  
  // Mock fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'testToken', /* ...otherProfileData */ })
    })
  );
  
  // Import the login function from your actual file
  // Replace './path/to/login.js' with the actual path to your login.js file
  import { login } from '../api/auth/login.js';
  
  // ... [existing mocks and imports] ...

// Jest Test for login
describe('login', () => {
    beforeEach(() => {
      fetch.mockClear();
      window.localStorage.clear();
    });
  
    it('should save the token to localStorage on successful login', async () => {
      // ... [existing successful login test] ...
    });
  
    it('should throw an error on failed login', async () => {
      // Mocking fetch to simulate a failed login response
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ message: 'Invalid credentials' })
        })
      );
  
      const email = 'wrong@noroff.no';
      const password = 'wrongPassword';
  
      // Expect the login function to throw an error
      await expect(login(email, password)).rejects.toThrow('either the username or password is incorrect');
    });
  });
  