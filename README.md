v.1.0.6

[![Automated Unit Testing](https://github.com/S10ANDK/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/S10ANDK/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/S10ANDK/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/S10ANDK/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/S10ANDK/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/S10ANDK/social-media-client/actions/workflows/pages.yml)

Make sure to install Node.js v16.18.0 locally.

Install devDependencies:
npm i

Compiling from scss to css in real-time. Use:
npm run start

Update what files prettier and eslint are targeting to suit your needs (scripts in package.json):
"format": "prettier -w **/*.js",
"lint": "eslint **/*.js",
"lint-fix": "eslint **/*.js --cache --fix",

Configured for hosting with Vite. Use: 
npm run dev
or
npm run build-vite
npm run preview-vite
