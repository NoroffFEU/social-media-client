import { wait } from "./es6";

it("It resolves with 'abc' value after 1 second", async () => {
  const start = Date.now();
  const data = await wait(1000, "abc");
  expect(data).to.equal("abc");
  const end = Date.now();
  expect(end - start).to.be.gte(1000);
});
