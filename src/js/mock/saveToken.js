export function saveToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}
