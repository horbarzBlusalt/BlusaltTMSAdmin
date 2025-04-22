Feature: Sub Institution Management
    The test is focused on test cases around managing sub-institutions

    Background: Navigate into the app
        Given users are successfully logged in

    # Scenario: Test to ensure that users can add a new sub-institution successfully
    #     When users navigate into organization module
    #     When users click into an institution
    #     When users view subinstitution
    #     When users click on the add subinstitution button
    #     When users enter the admin details
    #     When users enter business profile details during "<onboarding>"
    #     When users click on save button
    #     Then navigate to support contact form
    #     And upload business documents
    #     When users enter business contact information
    #     When users enter subinstitution director information
    #     When users click subinstitution to view details
    #     Then users can verify subinstitution details
    #     Examples:
    #     |onboarding|
    #     |false|
    
     Scenario: Test to ensure users can invite a merchant 
        When users navigate into organization module
        When users navigate into subinstitution module
        When users click specific subinstitution to view details
        When users click the merchant tab
        When users click on send invite
        When users enter institution details and sends invite
        Then users can send institution invite successfully
    
    Scenario: Test to ensure that users can onboard an invited merchant successfully
        When users visit the generated onboarding link
        When users provides matching passwords
        When users users enter merchant basic information
        When users enter one time password
    


