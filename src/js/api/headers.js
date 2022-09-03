import * as storage from '../storage/index.js'

export const headers = () => {
  const token = storage.load("token");
  let headers = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}