# workflow-ca-social-media-client


#### Select an existing JavaScript project that has:

- API calls to CRUD an item :heavy_check_mark:
- API call to authenticate a user :heavy_check_mark:
- Does not belong to you  :heavy_check_mark:

Forked from: https://github.com/NoroffFEU/social-media-client 

#### The following workflows/hooks are required:

- Project is configured to run Prettier on commit  :heavy_check_mark:
- Project is configured to run ESLint on commit  :heavy_check_mark:
- Project is configured to run Jest on commit    :heavy_check_mark:
- Project is configured to deploy to pages on merge to default


#### The following file changes are required:

- Project readme file is updated to include new configuration information and status badges :heavy_check_mark:
- Project is configured for hosting (e.g. CDN links or a Bundler) :heavy_check_mark:


#### The following features must be automatically tested with unit tests:

- The login function returns a valid token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function creates a new item on the API

#### The following features must be automatically tested with end-to-end tests:

- The login form validates user inputs correctly based on API restrictions  :heavy_check_mark:
- The create item form validates user inputs correctly based on API restrictions  :heavy_check_mark:
- The logout button logs the user out when clicked

##### version history:
- v0.1.1 prettier installed & merged to workflow branch
- v0.1.2 eslint installed & merged to workflow branch
- v0.1.3 on-commit hooks addded & merged to workflow branch
- v0.1.4 vite installed & merged to workflow branch
- v0.1.5 Jest installed & merged to workflow branch
- *v0.1.6 Cypress installed & merged to workflow branch 
- v0.1.7 e2e test, completed login form validation 
- v0.1.8 e2e test, completed create item form validation

*Cypress v10.7.0 would not work on my setup, so am using v10.11.0
