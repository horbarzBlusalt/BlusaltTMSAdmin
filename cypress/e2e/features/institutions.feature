Feature: Institution Management
    The test is focused on test cases around managing institutions

    Background: Navigate into the app
        Given users are successfully logged in
    
    # Scenario: Test to ensure users can view all the institution 
    #     When users navigate into organization module
    #     Then users can view all institutions
    
    Scenario: Test to ensure users can invite an institution 
        When users navigate into organization module
        When users click on send invite
        When users enter institution details and sends invite
        Then users can send institution invite successfully

    Scenario: Test to ensure that users can onboard an invited institution successfully
        When users visit the generated onboarding link
        When users provides matching passwords
        When users users enter basic information
        When users enter one time password
        When preferred services is selected
        When users enter business profile details during "<onboarding>"
        Then navigate to support contact form
        And upload business documents
        When users enter business contact information
        When users enter director information during "<onboarding>"
        Then enter custom domain details during "<onboarding>"
        And verify the application page
        When user attempts to edit application
        Then user submits application
        Examples:
        |onboarding|
        |true|

    # Scenario: Test to ensure users can add new institution
    #     When users navigate into organization module
    #     When users click on the add new institution button
    #     When users enter the admin details
    #     When users enter business profile details during "<onboarding>"
    #     When users click on save button
    #     Then navigate to support contact form
    #     And upload business documents
    #     When users enter business contact information
    #     When users enter director information during "<onboarding>"
    #     Then enter custom domain details during "<onboarding>"
    #     Examples:
    #     |onboarding|
    #     |false|

    # Scenario: Test to ensure users can view institution info
    #     When users navigate into organization module
    #     When users click into an institution
    #     When users view subinstitution
    #     When users view institutions merchants
    #     When users view institutions terminals
    #     When users view institutions transactions
    #     When users view institutions route
    #     When users view institutions users
    #     When users view institutions branding

    # Scenario: Test to ensure users can send sub institution invite
    #     When users navigate into organization module
    #     When view specific institution
    #     When users view subinstitution
    #     When users click the send invite button
    #     When users enter institution details and sends invite
    #     Then users can send institution invite successfully
    
    # Scenario: Test to ensure that users can onboard an invited subinstitution successfully
    #     When users visit the generated onboarding link
    #     When users provides matching passwords
    #     When users users enter basic information
    #     When users enter one time password
    #     When users enter business profile details during "<onboarding>"
    #     Then navigate to support contact form
    #     And upload business documents
    #     When users enter business contact information
    #     When users enter director information during "<onboarding>"
    #     Then enter custom domain details during "<onboarding>"
    #     And verify the application page
    #     When user attempts to edit application
    #     Then user submits application
    #     Examples:
    #     |onboarding|
    #     |false|



        
        
