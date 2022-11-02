###Steps:

- Made branch "configure-prettier", using command: `git checkout -b configure-prettier`
- Pushed branch to remote, using command: `git push -u origin configure-prettier`
- Installed all dependencies/devDependencies from package.json, using command: `npm i`  
  ** Returns `npm WARN deprecated` + `3 **high\*\* severity vulnerabilities`
- Uninstalled live-server because I didn't read the return warnings, using command: `npm uninstall live-server`
- Installed it again globally without exact version, using command: `npm install -g live-server`
  ** Getting the same return `npm WARN deprecated` + `2 **high\*\* severity vulnerabilities`
- Using command: `npm audit fix --force`, returns ok with 0 vulnerabilities
- `Commit` changes
- Installed `prettier` to `devDependencies`, using command: `npm i prettier@2.7.1 -D`
- `Commit` changes
- [Pre-Commit Hook, Option 1: lint-staged](https://prettier.io/docs/en/precommit.html)
- ^ Added configuration to `package.json`, using command: `npx mrm@2 lint-staged`
- `Commit` changes
