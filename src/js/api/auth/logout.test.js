import { logout } from './logout'
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

describe('delete token', () => {
  it('deletes token from local storage', async () => {
    logout()

    const token = localStorage.getItem('token')
    expect(token).toBeNull()
  })
})
