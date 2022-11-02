// const TEST_EMAIL = "johndoe@stud.noroff.no";
// const TEST_PW = "123456789";
// const TEST_ITEM = { email: TEST_EMAIL, password: TEST_PW };
const exampleJWTToken =
  "eyJhbJciOiJIUzI1NiIsInR5cCI7IkpXVCJ9.eyJpZCI6ODYsIm5hbWUiOiJubmJyOSIsImVtYWlsIjoibmpicjlBc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlcy51bnMwaGFzaC5jb20vcGhvdG8tMTY2NzE0MzI5NzYzNC0zMWM2YzVmNzBzODE_aXhsaWI9dmItNC4wLjMmaXhpZD1Nbmd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwIiwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjczNDE3MjN9.HkLJEA0Vr85CGeeruRCy8ou_zOoLN-DcQmpBKnt4oLB";

const exampleBadJWTToken =
  "eyJhbJciOiJ57IkpXVCJ9.eyJpJ85B4oLB.lsIjoibmpicjlBc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlcy51bnMwaGFzaC5jb20vcGhvdG8tMTY2NzE0MzI5NzYzNC0zMWM2YzVmNzBzODE_aXhsaWI9dmItNC4wLjMmaXhpZD1Nbmd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRY3JvcCZ3PTY4NyZxPTgwIiwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjczNDE3MjN9.HkLJEA0Vr85CGeeruRCy8ou";

const jwtRegEx = /^(?:[\w-]*\.){2}[\w-]*$/;
const jwtRegEx2 = /(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/;
const jwtRegEx3 = /(^[\w-]*\.[\w-]*\.[\w-]*$)/;
const jwtRegEx4 = /^(?:[\w-]*\.){2}[\w-]*$/;

// 'string'.match(/regex/);
// /regex/.test('string');

const myTest1 = jwtRegEx.test(exampleJWTToken);
const myTest2 = jwtRegEx2.test(exampleJWTToken);
const myTest3 = jwtRegEx3.test(exampleJWTToken);
const myTest4 = jwtRegEx4.test(exampleJWTToken);
console.log("MY_TEST::", myTest1);
console.log("MY_TEST_2::", myTest2);
console.log("MY_TEST_3::", myTest3);
console.log("MY_TEST_4::", myTest4);

const myBadTest1 = jwtRegEx.test(exampleBadJWTToken);
const myBadTest2 = jwtRegEx2.test(exampleBadJWTToken);
const myBadTest3 = jwtRegEx3.test(exampleBadJWTToken);
const myBadTest4 = jwtRegEx4.test(exampleBadJWTToken);
console.log("MY_BAD_TEST_1::", myBadTest1);
console.log("MY_BAD_TEST_2::", myBadTest2);
console.log("MY_BAD_TEST_3::", myBadTest3);
console.log("MY_BAD_TEST_4::", myBadTest4);
// exampleJWTToken.test(jwtRegEx2);
// exampleJWTToken.test(jwtRegEx3);
// exampleJWTToken.test(jwtRegEx4);

// node src/js/api/auth/del.js
