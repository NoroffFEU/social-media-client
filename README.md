# workflow-ca-social-media-client


#### Select an existing JavaScript project that has:

- API calls to CRUD an item
- API call to authenticate a user 
- Does not belong to you

Fork: https://github.com/NoroffFEU/social-media-client :heavy_check_mark:

#### The following workflows/hooks are required:

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project is configured to run Jest on commit
- Project is configured to deploy to pages on merge to default

#### The following file changes are required:

- Project readme file is updated to include new configuration information and status badges
- Project is configured for hosting (e.g. CDN links or a Bundler)

#### The following features must be automatically tested with unit tests:

- The login function returns a valid token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function creates a new item on the API

#### The following features must be automatically tested with end-to-end tests:

- The login form validates user inputs correctly based on API restrictions
- The create item form validates user inputs correctly based on API restrictions
- The logout button logs the user out when clicked
