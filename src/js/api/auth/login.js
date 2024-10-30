// src/js/api/auth/login.js

import { apiPath } from '../constants.js';
import { headers } from '../headers.js';
import { save } from '@storage/index.js'; // Updated import to use the alias for cleaner module resolution

/**
 * Handles user login by sending email and password to the API.
 * If successful, stores the token and profile information in storage.
 *
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Object} profile - The user profile without the token.
 * @throws Will throw an error if the login fails.
 */
export async function login(email, password) {
  try {
    // Make the login request to the API endpoint
    const response = await fetch(`${apiPath}/social/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: headers('application/json'),
    });

    // Check if response is OK, otherwise throw an error
    if (response.ok) {
      // Parse the JSON response
      const profile = await response.json();

      // Save the token and user profile in storage
      save('token', profile.accessToken);
      delete profile.accessToken; // Remove the token from the profile object
      save('profile', profile);

      // Return the profile without the token
      return profile;
    }

    // Throw an error with response status text if login fails
    throw new Error(response.statusText);
  } catch (error) {
    console.error('Login failed:', error);
    throw error; // Re-throw the error so that it can be handled by the caller
  }
}
