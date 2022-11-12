#Course Assignment - Workflow 2 - Frontend year 2

##The following workflows/hooks are required:
-Iniltialized npm with:
```
npm init
```

-Added node_modules with:
```
npm i
```


###1.	Project is configured to run Prettier on commit 
-Installed Prettier as a devDependency with: 
```
npm install --save-dev prettier
```

--Checked if installation was successfull with 
```
npx prettier -c src
```

-Runned Prettier with 
```
npx prettier -w src
```


###2.	Project is configured to run ESLint on commit 
-Installed esLint as a devDepencendy wih 
```
npm install eslint --save-dev
```

-Initialixe esLint with which created the .eslintrc.json file:
```
npx eslint --init
```

###3.	Project is configured to run Jest on commit 
-Install Jest as a devDependency with :
```
npm install --save-dev jest
```

-Had to add this for eslint to allow jest function tests: 
```
npm i -D eslint-plugin-jest
```

-Creating a pre-commit hook using :
```
npx mrm@2 lint-staged
```


##The following file changes are required:
###2.	Project is configured for hosting (e.g CDN links or a Bundler)
-Install vite: 
```
npm i vite -D
```
-added vite.config.js and put path to .dist
Estalished Github Page with GitHub Actions on Github


##The following features must be automatically tested with unit tests:
First i set up Cypress manually:
-Installed Cypress with :
```
npm install cypress --save-dev)
```

Open cypress with:
```
npx cypress open 
```
Made some folders and files (cypress.config.js, e2e.js, commands.js)


###1.	Login function returns a valid token when provided with valid credentials
Made a spec in cypress and added my url to my login-return-token.cy.js file
Got an error when trying to commit my test so had to install this plugin:
```
npm install eslint-plugin-cypress@latest --save-dev
```

had to add "no-unused-vars": "off" under "rules" in eslintrc.json also
To access localStorage i run:
```
npm i --save-dev cypress-localstorage-commands
```
-Test passes


###2.	Logout function clears the token form browser storage
In order for logout and login to work at the same time i
had to make a cypress command for login function and log out function to get the 
async and await as needed
-Test passes

###3.	Create item function creates a new item on the API
Created a cypress command of createPost function and deletePost function.
-Test passes (posts and deletes post)



##The following features must be automatically tested with end-to-end tests:
###1.	Login form validates user inputs correctly based on API restrictions

###2.	Create item form validates user inputs correctly based on API restrictions
-Test checkes if you can NOT log in with wrong email - passes
-Test checks if you can NOT log in with wrong password - passes
-Test checks if you can NOT log in with wrong email and password - passes

###3.	Logout button logs the user out when clicked
Created a e2e test. Noticed i had to add cy.wait(1000) in order for the test not to run too fast that the preview froze. 
And that had to be ignored for esLint to approve commit.
But with a second wait here and there it worked just fine.
-Test passes
