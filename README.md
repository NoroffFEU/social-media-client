# Workflow

    [FORKED FROM THIS REPO](https://github.com/NoroffFEU/social-media-client)

# set up

```bash
git clone -b Workflow https://github.com/olemart1n/social-media-client-Ole.git
```

```bash
git init
npm i
npm run build
```

```bash
use live server extension to host the site locally
```

### To run cypress test locally, create .env and fill in your email&password like this

```bash
EMAIL="email@noroff.no"
PASSWORD="password"
```

## Tests

** Unit-testing with Jest**

-login.test.js
-logout.test.js
-create.test.js

**E2E-testing with Cypress**
-login.cy.js
-logout.cy.js
-create.cy.js