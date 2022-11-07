Course Assignment - Workflow 2 - Frontend year 2

-Iniltialized npm with (npm init)

-Added node_modules with (npm i or npm install

-Install package: webpack with (npm install webpack@5.74.0 --save-dev --save-exact)

-Install a webpack-cli package to have access to CLI (npm install webpack-cli@4.10.0 --save-dev)

-Installed Prettier as a devDependency with (npm install --save-dev prettier)

--Checked if installation was successfull with (npx prettier -c src)

-Runned Prettier with (npx prettier -w src)

-Installed esLint as a devDepencendy wih (npm install eslint --save-dev)

-Initialixe esLint with (npx eslint --init
) - this created the .eslintrc.json file

-Creating a pre-commit hook using (npx mrm@2 lint-staged)


---- caught an error at this point!
-Tried commiting, but esLint returns an error in the updateProfileImage function:
C:\Users\Sindr\workflow-ca\social-media-client\src\js\api\profiles\update.js
  8:62  error  'id' is not defined  no-undef

✖ 1 problem (1 error, 0 warnings)

I chose to fix the error by  changing the url in update.js 
by removing ${id} and adding ${me.name}/media instead, then
the commit worked fine.
----


-Install Jest as a dev-Dependency with (npm install --save-dev jest)

-Added "amd": true , "jest": true,
    "node": true to .eslintrc.json file to use defined and require.
Also added :   "files": [
                "jest.test.js",
                "./src/js/jest.js"
            ] 
in overides in same file. I came to this solution by googling every error
