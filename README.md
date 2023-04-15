# Workflows CA

![Unit Testing](https://github.com/OleMartinKeis/social-media-client-OMK-workflows-CA/actions/workflows/unit-test.yml/badge.svg)
![E2E Testing](https://github.com/OleMartinKeis/social-media-client-OMK-workflows-CA/actions/workflows/e2e-test.yml/badge.svg)
![Deploy static content to pages](https://github.com/OleMartinKeis/social-media-client-OMK-workflows-CA/actions/workflows/pages.yml/badge.svg)

## Getting started

1. Clone the repo through CLI or github.

```
git clone https://github.com/OleMartinKeis/social-media-client-OMK-workflows-CA.git
```

2. Run ```npm install``` to install the needed dependencies

3. Run ```npm build```

## Using env.example:

### When filling out for valid login and/or logout: 

Input a valid account from Noroffs social media API. 
This must have a valid @stud.noroff.no or @noroff.no email account.

### When filling out for invalid login:

Same as before but insert wrong password instead.

## Issues:

No matter how many tries I did to get my email and passwords as a ENV, I got the error seen under imgs/Screenshot.

Therefore I created a user with a different email and password than mine and used that in this example. I know this isn't the best practice and this is something I will want to fix in the future.