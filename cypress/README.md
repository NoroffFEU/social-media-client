Improved Application Workflow & QA

This repository is a fork from the main project where the primary goal was to enhance the application's quality through the establishment of effective development workflows and a robust testing strategy.

Overview

Quality assurance is crucial throughout the development lifecycle. Typically, the emphasis is on reaching an MVP for the application. This repository focuses on building upon an existing MVP by adding improved workflows and testing mechanisms to ensure the application's quality is up to standard.

Core Features of the Application

Front-end Login: Connects to an API JWT endpoint.
Front-end Logout: Button functionality linked to browser storage.
CRUD Functionality: Exists for at least one object type on the front-end.
Profile Page: A user-specific front-end profile page.
Note: The Noroff API Social Media client integrates seamlessly with this project.
Workflows/Hooks Integrated

Prettier Integration: Configured to run on every commit, ensuring consistent code formatting.
ESLint Integration: Runs on every commit to check and enforce coding standards.
Branch Protection: The default branch is safeguarded. Proper versioning and branching conventions have been adhered to.
Build & Deploy: Configured to build and auto-deploy to pages upon merging to the default branch.
Changes & Enhancements

Updated README: This document includes new configuration details and workflow status badges.
404 Check: The deployed project was scrutinized for 404 errors.
Issue Tracking: Any identified bugs have been logged in the Issues tab.
Automated Testing

Unit Tests
Login Function: Validates the fetch and storage of a token in the browser storage.
Logout Function: Ensures the token is cleared from the browser storage.
End-to-End Tests
Profile Access: After login, the user should access their profile.
Invalid Credentials: Users should not submit the login form with incorrect credentials. An error message should be displayed.
Logout Functionality: Users should successfully log out using the logout button.
Important Notes

Ensure you have all dependencies installed and follow the guidelines for setting up the project. Always keep an eye on the Issues tab for any new identified bugs or concerns.

Feel free to contribute or raise any concerns you might come across. Remember, the aim is to ensure top-notch quality and robust workflows for a seamless development experience.

To set this up on your local machine, follow the setup guidelines provided in the setup document.
