

###Steps:  
* Made branch "configure-prettier", using command: `git checkout -b configure-prettier`
* Pushed branch to remote, using command: `git push -u origin configure-prettier`
* Installed all dependencies/devDependencies from package.json, using command: `npm i`  
** Returns `npm WARN deprecated` + `3 **high** severity vulnerabilities`
* Uninstalled live-server because I didn't read the return warnings, using command: `npm uninstall live-server`
* Installed it again globally without exact version, using command: `npm install -g live-server`
** Getting the same return `npm WARN deprecated` + `2 **high** severity vulnerabilities`
* Using command: `npm audit fix --force`, returns ok with 0 vulnerabilities
* `Commit` all changes
* 
