import { apiUrl, apiPath } from "../../../js/api/constants";

describe('constants.js', () => {
    it('should define apiUrl as a URL object', () => {
        expect(apiUrl).toBeInstanceOf(URL);
    });
    
    it('should construct the correct base URL', () => {
        expect(apiUrl.toString()).toBe('https://nf-api.onrender.com/api/v1');
    });
    
    it('should create apiPath as a string representation of apiUrl', () => {
        expect(apiPath).toBe(apiUrl.toString());
    });
});