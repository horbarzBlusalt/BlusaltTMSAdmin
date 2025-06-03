Feature: Merchant Payment Module
    The test is focused on test cases around merchant payment

    Background: Navigate into the app
        Given users are successfully logged in
    
    Scenario: Test to ensure users can view all the merchant payment dashboard 
        When users navigate into merchant payment dashboard
        When users navigate into the transactions page
        When users navigate into the terminals page
        Then verify terminal information
        