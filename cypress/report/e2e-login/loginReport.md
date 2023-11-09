# End-to-End Test Report: Login Functionality

## Introduction

This report provides an overview of the end-to-end (E2E) testing process, outcomes, and observations for the login functionality of our web application. The objective of these tests is to ensure that the entire flow of logging into the system works as expected from the user's perspective.

## Test Environment

- **E2E Test Framework:** Cypress
- **Browser:** Electron
- **Test Execution Environment:** GitHub Actions

## Test Scenarios

The following scenarios were covered during the E2E testing:

1. **Valid Login Test:**

   - Purpose: To verify that users with valid credentials can log in successfully.
   - Test Steps:
     - Navigate to the login page.
     - Enter valid email and password credentials.
     - Submit the login form.
   - Expected Result: User is redirected to the profile view (`view=profile` in URL).

2. **Invalid Email Test:**

   - Purpose: To validate the behavior of the login functionality when an invalid email is provided.
   - Test Steps:
     - Navigate to the login page.
     - Enter an invalid email and a valid password.
     - Submit the login form.
   - Expected Result: An alert message is shown stating that only Noroff student or teacher emails are valid.

3. **Invalid Password Test:**

   - Purpose: To verify the system's response to incorrect password input.
   - Test Steps:
     - Navigate to the login page.
     - Enter a valid email and an incorrect password.
     - Submit the login form.
   - Expected Result: The user remains on the login page, and profile view is not shown.

4. **Logout Test:**
   - Purpose: To confirm that users can log out successfully.
   - Test Steps:
     - Execute a successful login.
     - Click the logout button.
   - Expected Result: The user is logged out, and the `token` in `localStorage` is cleared.

## Test Results

### Passed Tests

- **Valid Login Test:** Passed
  - The user was able to log in successfully and was redirected to the profile page.
- **Invalid Email Test:** Passed
  - The correct error message was displayed when an invalid email was entered.
- **Invalid Password Test:** Passed
  - The user was not redirected to the profile page when an incorrect password was entered.

### Failed Tests

- **Logout Test:** Failed initially in the CI/CD pipeline
  - The initial failure was due to environment-specific issues, misconfiguration.
  - The issue was resolved by updating the GitHub Actions workflow.

## Observations and Recommendations

- The discrepancies between the local and CI/CD test environments initially caused some tests to fail. It is recommended to align the CI/CD environment as closely as possible with the local development setup.
- The use of explicit waits (`cy.wait`) could be a potential source of flakiness in tests. It's advisable to use Cypress's built-in waiting mechanisms that wait for specific conditions.
- All functionalities related to the login/logout process are working as expected after the latest workflow adjustments.

## Conclusion

The E2E tests for the login functionality have been executed successfully with the necessary adjustments made to the CI/CD pipeline. All critical paths for user authentication are verified and behave as expected under test conditions.

---
