export function localStorage() {
  const localStorage = require("local-storage-mock");

  Object.defineProperty(global, "localStorage", { value: localStorage });
}

//Source for the object define solution above: https://robertmarshall.dev/blog/how-to-mock-local-storage-in-jest-tests/
