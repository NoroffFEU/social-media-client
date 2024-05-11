import { apiBase } from '../../../js/api/apiBase.js';

describe('apiBase.js', () => {
    it('should define apiBase as a URL object', () => {
        expect(apiBase).toBeInstanceOf(URL);
    });

    it('should construct the correct base URL', () => {
        expect(apiBase.toString()).toBe('https://whatver.com/api/posts');
    });
});