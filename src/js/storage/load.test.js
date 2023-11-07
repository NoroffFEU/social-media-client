import { load } from './load'; // Replace with the actual import path
import 'jest-localstorage-mock'; // Import the jest-localstorage-mock library to mock localStorage

describe('load', () => {
  it('stores a token in browser storage', () => {
    // Mock the localStorage.setItem method
    const setItemMock = jest.spyOn(localStorage, 'setItem');

    // Call the load function to store a token
    const token = 'your-token'; // Replace with the token you want to store
    load('authToken', token); // Assuming 'authToken' is your key

    // Assert that localStorage.setItem was called with the expected key and token
    expect(setItemMock).toHaveBeenCalledWith('authToken', JSON.stringify(token));
  });
});


