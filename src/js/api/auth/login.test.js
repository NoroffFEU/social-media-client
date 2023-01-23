import { login } from './login'
import storage from '../../helpers/storage'

const accessToken = 'ajskdlahakshdk'

const profile = {
  name: 'petter',
  banner: '',
  email: '',
  avatar: '',
  accessToken,
}

global.localStorage = storage

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        accessToken,
        ...profile,
      }),
    status: 200,
    statusText: 'OK',
    ok: true,
  })
)

describe('login', () => {
  it('saves a token in localstorage', async () => {
    await login('petter@noroff.no', 'pasword')

    const token = localStorage.getItem('token')
    expect(token).not.toBeNull()
  })
})
