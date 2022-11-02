// const TEST_EMAIL = "johndoe@stud.noroff.no";
// const TEST_PW = "123456789";
// const TEST_ITEM = { email: TEST_EMAIL, password: TEST_PW };
const exampleJWTToken =
  "eyJhbJciOiJIUzI1NiIsInR5cCI7IkpXVCJ9.eyJpZCI6ODYsIm5hbWUiOiJubmJyOSIsImVtYWlsIjoibmpicjlBc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlcy51bnMwaGFzaC5jb20vcGhvdG8tMTY2NzE0MzI5NzYzNC0zMWM2YzVmNzBzODE_aXhsaWI9dmItNC4wLjMmaXhpZD1Nbmd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTY4NyZxPTgwIiwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjczNDE3MjN9.HkLJEA0Vr85CGeeruRCy8ou_zOoLN-DcQmpBKnt4oLB";

// const exampleBadJWTToken = "eyJhbJciOiJ57IkpXVCJ9.eyJpJ85B4oLB"
const jwtRegEx = /^(?:[\w-]*\.){2}[\w-]*$/;
const jwtRegEx2 = /(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/;
const jwtRegEx3 = /(^[\w-]*\.[\w-]*\.[\w-]*$)/;
const jwtRegEx4 = /^(?:[\w-]*\.){2}[\w-]*$/;

// 'string'.match(/regex/);
// /regex/.test('string');

exampleJWTToken.test(jwtRegEx);
exampleJWTToken.test(jwtRegEx2);
exampleJWTToken.test(jwtRegEx3);
exampleJWTToken.test(jwtRegEx4);
