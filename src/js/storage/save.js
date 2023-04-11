export const save = (key, value) => {
  console.log("save", key, typeof value, value)
  if (typeof value !== "string") {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}