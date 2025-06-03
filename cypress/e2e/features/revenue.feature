Feature: Revenue Page
    The test is focused on revenue page functionality and display

    Background: Navigate into the app
        Given users are successfully logged in
    
    Scenario: Test to verify revenue page displays correctly
        When users navigate to the revenue page
        Then all static elements should be visible
        And all dynamic values should be valid numbers
        When users navigate to the commission page
        Then all static elements should be visible on commission page
        And all dynamic values should be valid numbers on commission page
        When users navigate to the commissions report page
        Then all static elements should be visible on commissions report page
        And all dynamic values should be valid numbers on commissions report page