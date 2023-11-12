require('text-encoding');

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { Worker } = require('worker_threads');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });

global.window = dom.window;
global.document = window.document;
global.navigator = window.navigator;
global.Worker = Worker;

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

  afterAll(() => {
    dom.window.close();
  });
});
