import { login } from '../auth/login';
import { createPost } from './create';

it('Creates item', async () => {
    await login('jorgen.w.engh@noroff.no', '12345jorgen');
    const response = await createPost('title');
    expect(response.title).toEqual('title');
});
