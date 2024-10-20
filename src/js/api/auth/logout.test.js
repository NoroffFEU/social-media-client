import { logout } from "./logout.js"
import localStorageMock from "../auth/localStorageMock"

/* global global */
global.localStorage = localStorageMock

describe("logout", () => {
  it("removes all tokens", () => {
    localStorage.setItem("token", "some-token")
    logout()
    expect(localStorage.getItem("token")).toBeNull()
  })
})