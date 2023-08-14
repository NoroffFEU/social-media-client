export const remove = (key) => localStorage.removeItem(key);

export const logout = () => {
  remove('authToken');
};
