// Unit tests for the described scenarios

describe('Authentication Unit Tests', () => {

    it('The login function fetches and stores a token in browser storage', () => {
      // Call your login function
      login('userEmail', 'userPassword');
      // Check that the token is stored in browser storage
      const token = localStorage.getItem('authToken');
      expect(token).toBeDefined();
    });
  
    it('The logout function clears the token from browser storage', () => {
      // Store a mock token for testing
      localStorage.setItem('authToken', 'mockToken');
      // Call your logout function
      logout();
      // Check that the token is removed from browser storage
      const token = localStorage.getItem('authToken');
      expect(token).toBeNull();
    });
  
  });
  