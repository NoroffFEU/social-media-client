# Installing project
- ```git clone https://github.com/MariuszRozycki/social-media-client.git```
- create branch ```git checkout -b workflow```
- installing dependencies ```npm install npm-run-all --save-dev```
- setting up package.json:
```json
{
  "scripts": {
    "build": "sass src/scss:dist/css",
    "watch-css": "sass --watch src/scss:dist/css",
    "live": "live-server",
    "start": "npm-run-all --parallel watch-css live"
  }
}
