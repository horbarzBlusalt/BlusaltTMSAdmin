Feature: Institution Management
    The test is focused on test cases around managing institutions

    Background: Navigate into the app
        Given users are successfully logged in
    
    Scenario: Test to ensure users can view all the institution 
        When users navigate into organization module
        Then users can view all institutions
        
