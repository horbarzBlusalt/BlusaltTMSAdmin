Feature: Authentication Feature
    The test is focused on test cases around authenticating users

    Background: Navigate into the app
        Given users navigate to the app

    Scenario: Test to ensure when users provide valid credentials, login is successful
        When users visit the login page
        When users enter "<email>" and "<password>"
        When users click login button
        Then login is successful
        Examples:
        |email|password|
        |admin@blusalt.net|Blusalt2024|

    Scenario: Test to ensure when users provide invalid credentials, login fails
        When users visit the login page
        When users enter "<email>" and "<password>"
        When users click login button
        Then login fails
        Examples:
        |email|password|
        |admin@blusalt.com|Blusalt21|