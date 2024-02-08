// import { logout } from "../auth/logout.js";
// import { createMockLocation } from "../../jest-mock/mock.js";

// describe("Logout Function", () => {
//   beforeEach(() => {
//     global.localStorage = {
//       clear: jest.fn(),
//     };
//   });

//   afterEach(() => {
//     // Reset global.localStorage after each test
//     global.localStorage = undefined;
//   });
//   it("should clear local storage and update window.location", () => {
//     const mockEvent = {
//       preventDefault: jest.fn(),
//     };

//     const mockLocation = createMockLocation("index.html");

//     logout(mockEvent);

//     expect(localStorage.clear).toHaveBeenCalledTimes(1);

//   });
// });

import StorageMock from "../../api/jest-mock/storage-mock.js";
import { logout } from "./logout.js";

global.localStorage = new StorageMock();

it("logout", () => {
  test("removes the token", () => {
    localStorage.setItem("token", "doesn't matter");
    logout();
    expect(localStorage.getItem("token")).to.be.null;
  });
});
