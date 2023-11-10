const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

const dom = new JSDOM(html);
global.window = dom.window;
global.document = window.document;

const scriptPath = path.resolve(__dirname, 'main.js');
require(scriptPath);

test('Login Functionality - should fetch and store a token in browser storage', () => {
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('login-button');

  usernameInput.value = 'testuser';
  passwordInput.value = 'testpassword';

  loginButton.click();

  const storedToken = localStorage.getItem('token');

  expect(storedToken).toBeTruthy();
});
