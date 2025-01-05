//index.js (in the root directory of my project)
require('dotenv').config(); // Load environment variables from .env file

// Access and print the environment variable
console.log(process.env.LOGIN_EMAIL);
console.log(process.env.LOGIN_PASSWORD);
