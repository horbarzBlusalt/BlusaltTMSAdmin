Feature: Institution Management
    The test is focused on test cases around managing institutions

    Background: Navigate into the app
        Given users are successfully logged in
    
    Scenario: Test to ensure users can view all the institution 
        When users navigate into organization module
        Then users can view all institutions
    
     Scenario: Test to ensure users can invite an institution 
        When users navigate into organization module
        When users click on send invite
        When users enter "<institution_name>" "<institution_email>" and sends invite
        Then users can send "<institution_email>" institution invite successfully
        Examples:
        |institution_name|institution_email|
        |dem|dem|

    # Scenario: Test to ensure users can add new institution
    #     When users navigate into organization module
    #     When users click on the add new institution button
    #     When users enter institution profile details
    #     When users click on save button
    #     Then navigate to support contact form

    # Scenario: Test to ensure users can view institution info
    #     When users navigate into organization module
    #     When users click into an institution
    #     When users view subinstitution
    #     When users view institutions merchants
    #     When users view institutions terminals
    #     When users view institutions transactions
    #     When users view institutions route
    #     When users view institutions users

    # Scenario: Test to ensure users can send sub institution invite
    #     When users navigate into organization module
    #     When users click into an institution
    #     When users view subinstitution
    #     When users click the send invite button
    #     When users enter "<institution_name>" "<institution_email>" and sends invite
    #     Then "<institution_email>" subinstitution users are invited successfully
    #     Examples:
    #     |institution_name|institution_email|
    #     |jopsola|jopesola|
    
    # Scenario: Test to ensure that users can onboard a new sub-institution successfully
    #     When users visit the generated onboarding link
    #     When users provides matching passwords
    #     When users users enter basic information
    #     When users enter one time password
    #     When users enter institution profile details
    #     When users enter support details



        
        
