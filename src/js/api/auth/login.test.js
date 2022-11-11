import { login } from './login.js';
import { save } from '../../storage/save.js';

test('returns a valid token when provided with valid credentials', async () => {
    await login('jorgen.w.engh@noroff.no', '12345jorgen');
    expect(save).toBeTruthy();
});
