# Social Media Client 

[![Automated E2E Testing](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/e2e_testing.yml/badge.svg)](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/e2e_testing.yml)
[![Automated Unit Testing](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/unit_testing.yml/badge.svg)](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/unit_testing.yml)
[![Deploy static content to Pages](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/main.yml/badge.svg)](https://github.com/SaraRFerrer/workflow_SaraFerrer_ca/actions/workflows/main.yml)

Social Media Client is a teachers take on the JS2 Course Assignment. 

**Description**

Social Media Client is a Social Media application created by Oliver Dipple a teacher at Noroff School of Technology and Digital Media as a take on our JS2 Course Assignment. 

**The feautures include:** 

> - Responisve pages
> - Noroff API
> - Working login/registration pages
> - Working create/edit/read and delete post functions

**The Project is Built using**

> - Vanilla JavaScript
> - Bootstap and SASS
> - Noroff API

## Tests 

**Unit-testing with Jest**

- login.test.js

> Tests successful login
> Tests unsuccessful login

-logout.test.js
> Tests successful logout 

- create.test.js
> Tests successful creation of a post
> Tests unseccessfull creation on posts with 404 error

**E2E-testing with Cypress**

- login.cy.js
> Tests login with valid credentials
> Tests login error handling with invalid email
> Tests login error handling with invalid password 

- logout.cy.js
> Tests successful logout

- create.cy.js
> Tests user can create a post
> Tests form validation attempted submissions


**Installing**

1. Clone repo:

(https://github.com/NoroffFEU/social-media-client)

**Run Project**

```
git init

npm i 

npm run build
```

**Contribute**

If you want to contribute to the project make sure to fork and create a full prequest. 
