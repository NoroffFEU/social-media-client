Feature: Test Client Feature

    Scenario: Verify that user can login successfully
        Given user navigates to the home screen
        When user clicks on the login button
        And user types the email address
        And user types the password
        And user clicks on the login button of the modal
        Then user successfully logged in the application


    Scenario: Verify that user can add a new post
        Given user navigates to the home screen
        When user clicks on the login button
        And user types the email address
        And user types the password
        And user clicks on the login button of the modal
        Then user successfully logged in the application
        When user clicks on the New Post button
        And user types the Post Title
        And user types the Post tags
        And user types the Post Media
        And user types the Post Body
        And user clicks on the Publish Post button
        Then Delete button is displayed on the screen

    Scenario: Verify that user can logout successfully
        Given user navigates to the home screen
        When user clicks on the login button
        And user types the email address
        And user types the password
        And user clicks on the login button of the modal
        Then user successfully logged in the application
        When user clicks on the logout button
        Then user is logout successfully