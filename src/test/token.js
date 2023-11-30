export function setToken(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getToken(key) {
  return localStorage.getItem(key);
}
