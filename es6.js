export function wait(ms = 1000, resolveWith = "Hello World") {
  return new Promise((resolve) => {
    setTimeout(() => resolve(resolveWith), ms);
  });
}
