import { logout } from '../auth/logout.js'

//MOCK: localStorage
const localStorageMock = {
  removeItem: jest.fn()
}
global.localStorage = localStorageMock

describe('logout function', () => {
  it('clears the token from browser storage if triggered', () => {
    logout()
    expect(localStorage.removeItem).toHaveBeenCalledWith('token')
  })
})
