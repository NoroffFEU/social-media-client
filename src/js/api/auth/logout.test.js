import { logout } from './logout'

class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = String(value + '')
  }

  removeItem (key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()

global.localStorage.setItem('token', 'somelongtokenstring')

describe('logging out', () => {
  test('that the token in localstorage is cleared when user logs out', () => {
    logout()
    expect(global.localStorage.getItem('token')).toBeNull()
  })
})
