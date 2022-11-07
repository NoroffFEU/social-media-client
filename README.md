# workflow-CA-07-11-2022
CA workflow

- Legger til README.md fil


- npm init -y, npm install, npm audit fix --force
- npm install webpack@5.74.0 --save-dev --save-exact (installerer webpack)
- npm install webpack-cli@4.10.0 --save-dev (installerer webpack-cli package) fjerne ikke hatten ^ på versjons nummer 

(Har 3 high severity vaulnerabilities nå, hatt siden start)

- npm install --save-dev prettier (installere prettier som dev-dependency)
- npm install eslint --save-dev (installerer eslint som dev-dependency)
- initialize eslint with npx eslint --init

- sjekker prettier med npx prettier -c src
- kjører prettier med npx prettier -w src
- npx mrm@2 lint-staged (setter opp pre-commit hooks) (funker ikke. får mld at den ikke klarer å installer husky)

- Lager ny dev-dependency med (npm install --save-dev jest)

- La til " "amd": true, "jest": true, "node": true " i .eslintrc.jason fordi det kom error om at disse ikke var defined. Google sa dette kunne løses slik. 










