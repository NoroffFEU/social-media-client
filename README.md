[![Automated Unit Testing](https://github.com/griphaugland/ca_workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/griphaugland/ca_workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages & test all](https://github.com/griphaugland/ca_workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/pages.yml)

Project readme file is updated to include new configuration information and workflow status badges

.env file -- needs to contain working values of the following:
LOGIN_NAME=enteryourownname
LOGIN_USERNAME=enteryouremail@noroff.no
LOGIN_PASSWORD=yourpassword
LOAD_TOKEN=YourTokenhEre

cypress.env.json -- Needs to contain working username and password
Looks like this -->
{
"LOGIN_USERNAME": "enteryouremail@noroff.no",
"LOGIN_PASSWORD": "yourpassword"
}
