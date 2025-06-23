Feature: Device Management
    The test is focused on test cases around device manufacturers

    Background: Navigate into the app
        Given users are successfully logged in
    
    Scenario: Test to ensure users can view all the device manufacturers
        When users navigate into the device manufacturer page
        #Then I view the add device manufacturer form