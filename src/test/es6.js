// Define and export the wait function
export function wait(ms = 1000, resolveWith = "Hello World") {
    return new Promise((resolve) => {
      globalThis.setTimeout(() => resolve(resolveWith), ms); //Added globalThis to ensures that setTimeout is accessed from the global scope, making it available regardless of the environment.

    });
  }
  

/*import { wait } from "./es6";

test("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now()
  const data = await wait(1000, "abc");
  expect(data).toEqual("abc");
  const end = Date.now()
  expect(end - start).toBeGreaterThanOrEqual(1000)
})
/*
export function wait(ms = 1000, resolveWith = "Hello World") {
    return new Promise((resolve) => {
      setTimeout(() => resolve(resolveWith), ms);
    });
  }
 */ 