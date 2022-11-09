# workflow-ca-social-media-client


#### Select an existing JavaScript project that has:

- API calls to CRUD an item :heavy_check_mark:
- API call to authenticate a user :heavy_check_mark:
- Does not belong to you  :heavy_check_mark:

Fork: https://github.com/NoroffFEU/social-media-client :heavy_check_mark:

#### The following workflows/hooks are required:

- Project is configured to run Prettier on commit  :heavy_check_mark:
- Project is configured to run ESLint on commit  :heavy_check_mark:
- Project is configured to run Jest on commit    :heavy_check_mark:
- Project is configured to deploy to pages on merge to default

###### version history:
- v0.1.1 prettier installed & merged to workflow branch
- v0.1.2 eslint installed & merged to workflow branch
- v0.1.3 on-commit hooks addded & merged to workflow branch
- v0.1.5 Jest installed & merged to workflow branch

#### The following file changes are required:

- Project readme file is updated to include new configuration information and status badges
- Project is configured for hosting (e.g. CDN links or a Bundler) :heavy_check_mark:


###### version history:
- v0.1.4 vite installed & merged to workflow branch

#### The following features must be automatically tested with unit tests:

- The login function returns a valid token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function creates a new item on the API

#### The following features must be automatically tested with end-to-end tests:

- The login form validates user inputs correctly based on API restrictions
- The create item form validates user inputs correctly based on API restrictions
- The logout button logs the user out when clicked
