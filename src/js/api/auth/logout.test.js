import { logout } from "./logout.js"
import localStorageMock from "./mock/localStorageMock.js"

/* global global */
global.localStorage = localStorageMock

describe("logout", () => {
  it("removes the token", () => {
    localStorage.setItem("token", "some-token")
    logout()
    expect(localStorage.getItem("token")).toBeNull()
  })
})
