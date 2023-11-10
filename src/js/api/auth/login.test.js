import { login } from './login'

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

// Create a mock function that will pretend to be the native fetch function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(
    { name: 'tester1', email: 'test@tester.com', accessToken: 'dummyTokenToTest' }
  )
})
// Assign this to the global fetch function
global.fetch = mockFetchSuccess

describe('logging in', () => {
  test('that the token in localstorage is populated when user logs in', async () => {
    await login('test@tester.com', 'blablabla')
    expect(localStorage.getItem('token')).toContain('dummyTokenToTest')
  })
})
