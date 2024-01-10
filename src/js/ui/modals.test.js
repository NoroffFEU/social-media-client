import { modals } from './modals';
import { loginListener, registerListener } from '../listeners/index.js';

jest.mock('../listeners/index.js', () => ({
  loginListener: jest.fn(),
  registerListener: jest.fn(),
}));

describe('modals', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="loginForm"></form>
      <form id="registerForm"></form>
    `;
  });

  it('should attach loginListener to the login form', () => {
    modals();
    const loginForm = document.querySelector('form#loginForm');
    loginForm.dispatchEvent(new Event('submit'));
    expect(loginListener).toHaveBeenCalled();
  });

  it('should attach registerListener to the register form', () => {
    modals();
    const registerForm = document.querySelector('form#registerForm');
    registerForm.dispatchEvent(new Event('submit'));
    expect(registerListener).toHaveBeenCalled();
  });
});
