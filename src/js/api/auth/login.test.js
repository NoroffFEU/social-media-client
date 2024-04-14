import { login } from '../../../js/api/auth/index.js'

const localStorageMock = {
  setItem: jest.fn()
}
global.localStorage = localStorageMock

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: async () => ({
    accessToken: 'accessTokenMock'
  })
})

//MOCK: failed fetch request
const mockFetchFailure = jest.fn().mockResolvedValue({
  ok: false,
  statusText: 'Unauthorized'
})

describe('login function', () => {
  it('stores a token when provided with valid credentials', async () => {
    //Mock
    global.fetch = mockFetchSuccess

    //Assertion
    await login('validEmail', 'validPassword')
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'token',
      JSON.stringify('accessTokenMock')
    )
  })
  it('throws an error if provided with unvalid credentials', async () => {
    //Mock
    global.fetch = mockFetchFailure

    //Assertion
    await expect(async () => {
      await login('invalidEmail', 'invalidPassword')
    }).rejects.toThrow('Unauthorized')
  })
})
