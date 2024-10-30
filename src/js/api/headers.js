// headers.js
import { load } from '@storage/index.js'; // Assuming you set up an alias as "@storage"

// Function that adds headers with token if available
export const headers = (contentType) => {
  const token = load('token');
  const headers = {};

  if (contentType) {
    headers['Content-Type'] = contentType;
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};
