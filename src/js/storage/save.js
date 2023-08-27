export const save = (key, value) => {
  if (typeof localStorage !== "undefined") { 
    localStorage.setItem(key, JSON.stringify(value));
  }
};