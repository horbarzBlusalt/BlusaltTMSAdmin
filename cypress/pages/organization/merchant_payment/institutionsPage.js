///<reference types="cypress"/>
import { Utility } from "../../shared/utils"
import { faker } from '@faker-js/faker';

utilities = new Utility()

export class institutionsPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        toggleSB: ()=> cy.get('.main__sidebar > .navbar-toggler'),
        organizationSB: () => cy.get('.main__sidebar > .list-unstyled > :nth-child(3) > .ps-3'),
        moduleName: () => cy.get('.sub__sidebar__name'),
        tableColumnOne: () => cy.get('.table__head > .pointer > :nth-child(1)'),
        tableColumnTwo: () => cy.get('.table__head > .pointer > :nth-child(2)'),
        tableColumnThree: () => cy.get('.table__head > .pointer > :nth-child(3)'),
        tableColumnFour: () => cy.get('.table__head > .pointer > :nth-child(4)'),
        tableColumnFive: () => cy.get('.table__head > .pointer > :nth-child(5)'),
        sendInviteBtn: () => cy.contains('Send Invite'),
        addInstitutionBtn: () => cy.contains('Add New Institution'),
        institutionEmailInput: () => cy.get('#email'),
        institutionNameInput: () => cy.get('#institutionName'),
        submitInviteBtn: () => cy.get('.flex__center > .btn--secondary'),
        notificationMessage:() => cy.get('.Toastify__toast-body'),
        firstNameInput: () => cy.get('#adminFirstName'),
        lastNameInput: () => cy.get('#adminLastName'),
        adminEmailInput: () => cy.get('#adminEmail'),
        institutionSectorSelector:() => cy.get('#sector'),
        institutionPhoneNumberInput: () => cy.get('.react-tel-input'),
        institutionProfileEmailInput: () => cy.get('#bizEmail'),
        businessCityInput: () => cy.get('#city'),
        addressLineOneInput: () => cy.get('#addressLine1'),
        addressLineTwoInput: () => cy.get('#addressLine2'),
        saveAndContinueBtn: () => cy.contains('Save & Continue'),
        addDirBtn: () => cy.contains('Add Director'),
        addNewDirBtn: () => cy.contains('Add Another Director'), 
        supportEmailInput: () => cy.get('#supportEmail'),
        disputeEmailInput: () => cy.get('#disputeEmail'),
        busInstagramLinkInput: () => cy.get('#instagramLink'),
        busFacbookLinkInput: () => cy.get('#facebookLink'),
        busTwitterLinkInput: () => cy.get('#twitterLink'),
        institutionSendInvite: () => cy.get('.justify-content-sm-end > div.d-flex > :nth-child(1)'),
        loginBtn: () => cy.get('.btn--primary'),
        businessName: () => cy.get('#name'),
        businessContactFirstName: () => cy.get('#bizConFirstName'),
        businessContactLastName: () => cy.get('#bizConLastName'),
        businessContactEmail: () => cy.get('#bizConEmail'),
        businessAddressOne: () => cy.get('#bizConAddressLine1'),
        businessAddressTwo: () => cy.get('#bizConAddressLine2'),
        businessCity: () => cy.get('#bizConCity'),
        institutionName: () => cy.get('.text--lg'),
        institutionEmail: () => cy.get('.text--sm'),
        institutionStatus: () => cy.get('.text--sm'),
        institutionDate: () => cy.get('.text--sm'),
        institutionAction: () => cy.get('.text--sm'),
        institutionProfile: () => cy.get('.title'),
        institutionProfileName: () => cy.get('.text--lg'),
        institutionProfileEmail: () => cy.get('.text--sm'),
        phoneNumberInput: () => cy.xpath('//input[@type="tel"]'),
        institutionProfileAddress: () => cy.get('.text--sm'),
        institutionProfileSupport: () => cy.get('.text--lg'),
        institutionProfileSupportEmail: () => cy.get('.text--sm'),
        institutionProfileDisputeEmail: () => cy.get('.text--sm'),
        institutionProfileSocial: () => cy.get('.text--lg'),
        institutionProfileInstagram: () => cy.get('.text--sm'),
        institutionProfileFacebook: () => cy.get('.text--sm'),
        institutionProfileTwitter: () => cy.get('.text--sm'),
        passwordInput: () => cy.xpath('//input[@name="password"]'),
        confirmPasswordInput: () => cy.xpath('//input[@name="confirmPassword"]'),
        clickContinueButton: () => cy.get('.btn').click(),

    }

    clickSideBarToggle(){
        this.elements.toggleSB().click()
    }

    clickOrganizationSideBar(){
        this.elements.organizationSB().click()
    }

    verifyInstitutionsPage(){
        this.elements.moduleName().contains("Organization")
        this.elements.tableColumnOne().contains("INSTITUTION")
        this.elements.tableColumnTwo().contains("phone number")
        this.elements.tableColumnThree().contains("Status")
        this.elements.tableColumnFour().contains("Date")
        this.elements.tableColumnFive().contains("Actions")
    }

    clickSendInvite(){
        cy.wait(3000)
        this.elements.sendInviteBtn().click() 
    }

    clickAddInstitution(){
        this.elements.addInstitutionBtn().click()
    }

    enterInstitutionDetails(instName, instEmail){
        this.elements.institutionNameInput().type(instName)
        this.elements.institutionEmailInput().type(instEmail+Cypress.env('EMAIL_DOMAIN'))
        this.elements.submitInviteBtn().click()
    }

    verifyInstitutionInvite(instEmail){
        this.elements.notificationMessage().contains('Invite Sent Successfully')
        utilities.getLinkFromEmail(instEmail)
    }

    enterAdminProfileDetails(firstName, lastName, email, phoneNumber){
        cy.contains("Admin Contact")
        this.elements.firstNameInput().scrollIntoView().type(firstName, {force:true});
        this.elements.lastNameInput().scrollIntoView().type(lastName, {force:true});
        this.elements.adminEmailInput().scrollIntoView().type(email+utilities.getRandomNumber()+Cypress.env('EMAIL_DOMAIN'), {force:true});
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.saveAndContinueBtn().click()
    }

    enterBusinessProfileDetails(bizName, phoneNumber, businessEmail, addressOne, addressTwo, onboarding){
        var isOnboardingInvite = (onboarding === "true" )
        
       
        cy.get(':nth-child(1) > .form-group > .flex__start > #name').then(($bizNameInput) => {
            if(!$bizNameInput.val()){
                cy.wrap($bizNameInput).scrollIntoView().type(bizName, {force:true})
            }else{
                cy.log('Input field not empty')
            }
        })
        if(isOnboardingInvite){
            utilities.selectDropdown('Select Business Sector',0)
        }
        if(!isOnboardingInvite){
            utilities.selectDropdown('Select',0)
        }
        utilities.selectDropdown('Choose business employee Size',0)
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.institutionProfileEmailInput().type(businessEmail+utilities.getRandomNumber()+'@yopmail.com')
        utilities.selectDropdown('Enter the country',0)
        utilities.selectDropdown('Enter the state',0)
        this.elements.businessCityInput().type('Lekki Phase 1')
        this.elements.addressLineOneInput().type(addressOne)
        this.elements.addressLineTwoInput().type(addressTwo)
        this.elements.saveAndContinueBtn().click()
    }

    clickSaveContinue(){
        this.elements.saveAndContinueBtn().click()
    }

    enterSupportContactDetails(){
        cy.contains('Support Contact')
        this.elements.supportEmailInput().type('support@yopmail.com')
        this.elements.phoneNumberInput().type('08123456780')
        this.elements.disputeEmailInput().type('dispute@yopmail.com')
        this.elements.busInstagramLinkInput().type('https://instgram.com/definance')
        this.elements.busFacbookLinkInput().type('https://fbook.com/definance')
        this.elements.busTwitterLinkInput().type('https://x.com/definance')   
        this.clickSaveContinue()
    }

    uploadAndVerifyDocument(documentType){
        utilities.uploadDocument(documentType);
        // Retry mechanism - check for success message within specified time
        cy.get('.Toastify__toast--success', { timeout: 15000 })
            .then(($message) => {
                if($message.text() !== 'File uploaded successfully'){
                    // Retry upload if the message isn't successful
                    utilities.uploadDocument(documentType);
                    throw new Error('Retrying upload for ' + documentType);
                }else{
                    cy.log(documentType + ' uploaded successfully');
                }
            })
            // .then(() => {
            //     cy.log(documentType + ' uploaded successfully');
            // });
    }

    uploadBusinessDocuments(){
        // cy.get('#businessRegNo').type('RN3' + utilities.getRandomNumber());
        // this.uploadAndVerifyDocument("business-registration");
        // cy.get('#taxIdNo').type('TIN' + utilities.getRandomNumber());
        // this.uploadAndVerifyDocument("tax-identification");
        // this.uploadAndVerifyDocument("certificate-of-incorporation");
        // this.uploadAndVerifyDocument("memom-mart");
        // this.uploadAndVerifyDocument("proof-of-address");
        
        // this.clickSaveContinue();
        
        cy.get('#businessRegNo').type('RN3'+utilities.getRandomNumber())
        utilities.uploadDocument("business-registration")
        cy.get('#taxIdNo').type('TIN'+utilities.getRandomNumber())
        utilities.uploadDocument( "tax-identification")
        cy.wait(100)
        utilities.uploadDocument("certificate-of-incorporation")
        utilities.uploadDocument("memom-mart")
        utilities.uploadDocument("proof-of-address")
        //Wait for files to upload
        cy.wait(10000)

        //Used to handle cases where file upload fails
        // cy.get('.Toastify__toast-body > :nth-child(2)', {timeout: 5000}).then(($message) => {
        //     if($message.text() === 'File uploaded successfully'){
        //         cy.log('File uploaded successfully')
        //     }else{
        //         cy.get(':nth-child(2) > .col-2').then(($el) => {
        //             if($el.length <= 0){
        //                 utilities.uploadDocument("business-registration")
        //                 cy.get('.Toastify__toast--success', { timeout: 15000 })
        //             }
        //         })
        //         cy.get(':nth-child(4) > .col-2').then(($el) => {
        //             if($el.length <= 0){
        //                 utilities.uploadDocument( "tax-identification")
        //                 cy.get('.Toastify__toast--success', { timeout: 15000 })
        //             }
        //         })
        //         cy.get(':nth-child(5) > .col-2').then(($el) => {
        //             if($el.length <= 0){
        //                 utilities.uploadDocument("certificate-of-incorporation")
        //                 cy.get('.Toastify__toast--success', { timeout: 15000 })
        //             }
        //         })
        //         cy.get(':nth-child(6) > .col-2').then(($el) => {
        //             if($el.length <= 0){
        //                 utilities.uploadDocument("memom-mart")
        //                 cy.get('.Toastify__toast--success', { timeout: 15000 })
        //             }
        //         })
        //         cy.get(':nth-child(7) > .col-2').then(($el) => {
        //             if($el.length <= 0){
        //                 utilities.uploadDocument("proof-of-address")
        //                 cy.get('.Toastify__toast--success', { timeout: 15000 })
        //             }
        //         })
        //     }
        // })
        this.clickSaveContinue()
    }

    enterBusinessContactInformation(firstName, lastName){
        Cypress.on('fail', (error, runnable) => {
            if(error.message.includes('Expected to find element: #bizConFirstName')){
                utilities.uploadDocument( "tax-identification")
                cy.get('.Toastify__toast-body > :nth-child(2)', {timeout: 5000})
            }
        })
        this.elements.businessContactFirstName().scrollIntoView().type(firstName, {force:true})
        this.elements.businessContactLastName().scrollIntoView().type(lastName, {force:true})
        this.elements.businessContactEmail().type(firstName+utilities.getRandomNumber()+Cypress.env('EMAIL_DOMAIN'))
        this.elements.phoneNumberInput().type('08123456780')
        cy.xpath("//input[@name='bizConDateOfBirth']").type('12/01/1990')
        cy.contains('First Name').click()
        utilities.selectDropdown('Enter the country','0')
        utilities.selectDropdown('Enter the state','0')
        this.elements.businessCity().type('Yaba')
        this.elements.businessAddressOne().type('21 Adewale Street')
        this.elements.businessAddressTwo().type('22 Adesanya Street')
        this.clickSaveContinue()
    }

    enterDirectorInformation(firstName,lastName,dirEmail,newDirector, onboarding){
        var isOnboardingInvite = (onboarding === "true" )

        cy.get('#dirFirstName').type(firstName, {force:true})
        cy.get('#dirLastName').type(lastName, {force:true})
        cy.get('#dirEmail').type(dirEmail+utilities.getRandomNumber()+'@yopmail.com', {force:true})
        cy.xpath("//input[@name='dirDateOfBirth']").type('12/01/1990')
        cy.contains('Identity Card Type').click()
        this.elements.phoneNumberInput().type('08123456780')
        utilities.uploadDocument( "director-id")
        //Choose ID Card Type
        utilities.selectDropdown('Choose ID Card Type','0')
        cy.get('#dirIdentityNo').type('SBIN'+utilities.getRandomNumber())
        cy.xpath("//input[@name='dirIdentityIssuedDate']").type('12/01/2022')
        cy.xpath("//input[@name='dirIdentityExpiredDate']").type('12/01/2028')
        cy.contains('Select Today').click()
        if(isOnboardingInvite){
            utilities.selectDropdown('Choose Country', '0')
            utilities.selectDropdown('Choose State', '0')
        }
        if(!isOnboardingInvite){
            utilities.selectDropdown('Enter the country','0')
            utilities.selectDropdown('Enter the state','0')
        }
       
        cy.get('#dirCity').type('Yaba')
        cy.get('#dirAddressLine1').type('21 Adewale Street')
        cy.get('#dirAddressLine2').type('22 Adesanya Street')
        cy.wait(2000)
        cy.get('.Toastify__toast-body > :nth-child(2)', {timeout:8000}).should('have.text', 'File uploaded successfully');
        if(newDirector){
            this.elements.addNewDirBtn().click()
        }else{
            this.elements.addDirBtn().click()
        }
        this.elements.saveAndContinueBtn().click()
    }

    enterCustomDomainDetails(onboarding){
        var isOnboardingInvite = (onboarding === "true" )

        cy.contains('Custom Domain')
        if(isOnboardingInvite){
            cy.get('.btn--secondary').click()
        }
        if(!isOnboardingInvite){
            cy.get('.col-md-7 > :nth-child(2) > div.d-flex > .btn--secondary').contains('Add Institution').click()
        }
        cy.get('#institutionDomainName').scrollIntoView().type('https://definance'+utilities.getRandomNumber()+'.io', {force:true})
        cy.get('#merchantDomainName').scrollIntoView().type('https://automerchant'+utilities.getRandomNumber()+'.io', {force:true})
        if(isOnboardingInvite){
            cy.get('.btn--secondary').click()
        }
        if(!isOnboardingInvite){
            cy.get('.col-md-7 > :nth-child(2) > div.d-flex > .btn--secondary').contains('Add Institution').click()
        }
    }

    viewInstitutionInfo(nameOfInstitution){
        if(nameOfInstitution == undefined){
            cy.get('table tr:nth-child(2)').click();
        }else{
            cy.get('#searchQuery').type(nameOfInstitution + " {enter}")
            cy.wait(1000)
            cy.get('table tbody tr:nth-child(1)').click();
        }

        cy.get('div.header__badge > .active').contains('Institution Info')
        cy.contains('Transaction value')
        cy.contains('Commission Value')
        cy.contains('Sub-institution')
        cy.contains('terminals')
        cy.contains('Transaction Status')
        cy.contains('Chargeback Status')
        cy.contains('Charges Distribution')
        //Profile Information
        cy.contains('Institution name')
        cy.contains('Institution code')
        cy.contains('sector')
        cy.contains('email address')
        cy.contains('Terminal prefix')
        cy.contains('country')
        cy.contains('address')
        cy.contains('Institution Domain')
        cy.contains('Merchant Domain')
        cy.contains('Status')
    }

    viewInstitutionSubInstitutions(){
        cy.get('#route-1-tab').click()
    }

    clickSendSubInstitutionInvite(){
        cy.wait(3000)
        this.elements.institutionSendInvite().click()
    }

    verifySubInstitutionInvite(instEmail){
        this.elements.notificationMessage().contains('Invite Sent Successfully')
        utilities.getLinkFromEmail(instEmail)
    }

    visitOnboardingLink(){
        utilities.visitInviteLink()
    }

    enterMatchingPasswords(){
        cy.wait(1000)
        this.elements.clickContinueButton()
        cy.contains('Password must have at least 8 characters')
        this.elements.passwordInput().type("P@ssword1")
        this.elements.confirmPasswordInput().type("P@ssword1")
        this.elements.clickContinueButton()
        cy.get('.custom-check-box > .pointer').should('not.be.checked').click()
        cy.get('.custom-check-box > .pointer').should('be.checked')
        this.elements.clickContinueButton()
    }

    enterRepresentativeBasicInformation(firstName, lastName, phoneNumber){
        this.elements.clickContinueButton()
        cy.contains('This field cannot be empty')
        cy.get('#firstName').type(firstName)
        cy.get('#lastName').type(lastName)
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.clickContinueButton()
        cy.wait(5000)
        this.elements.notificationMessage().contains('Otp Successfully sent')
    }

    enterOTP(){
        cy.get('.heading-4').contains('Enter the one-time password sent to your phone')
        cy.wait(500)
        for(let i=1; i<=6; i++){ 
            cy.xpath('//input[@aria-label="Please enter OTP character '+i+'"]').type(i)
            cy.wait(1000)
        }
        this.elements.clickContinueButton()
    }

    selectPreferredServices(){
        cy.contains('Preferred Services')
        cy.contains('Merchant Payment')
        cy.contains('Agency Banking')
        cy.xpath("(//input[@type='checkbox'])[1]").click()
        cy.contains('Continue').click()
    }

    verifyApplicationPage(){
        cy.contains('Application Preview')
        cy.contains('Business Name')
        cy.contains('Business sector')
        cy.contains('business EMail')
        cy.contains('business Size')
        cy.contains('Contact Information')
        cy.contains('Business Support Contact')
        cy.contains('Custom Domain')
        cy.contains('Business Documents')
        cy.contains("Director")
    }

    editApplication(){
        cy.xpath("(//button[text()='Edit Info'])[1]").click()
        cy.get('.title').should('have.text', 'Edit Info')
        const companyName = faker.company.name()
        this.elements.businessName().type(companyName)
        this.elements.addressLineOneInput().clear().type(faker.address.streetAddress())
        this.elements.addressLineTwoInput().clear().type(faker.address.streetAddress())
        this.clickSaveContinue()
        cy.contains(companyName)

        cy.xpath("(//button[text()='Edit Info'])[2]").click()
        const firstName = faker.person.firstName('male')
        const lastName = faker.person.lastName('male')
        const address1 = faker.location.streetAddress()
        const address2 = faker.location.streetAddress()

        this.elements.businessContactFirstName().clear().scrollIntoView().type(firstName, {force:true})
        this.elements.businessContactLastName().clear().scrollIntoView().type(lastName, {force:true})
        this.elements.businessContactEmail().clear().type(firstName+utilities.getRandomNumber()+Cypress.env('EMAIL_DOMAIN'))
        this.elements.businessCity().type('Ketu')
        this.elements.businessAddressOne().clear().type(address1)
        this.elements.businessAddressTwo().clear().type(address2)
        this.clickSaveContinue()

        for (let index = 0; index < 2; index++) {
            cy.xpath("//button[text()='Add Info']").click()
            cy.get('.title').should('have.text', 'Edit Info')
            this.enterDirectorInformation(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), true, "true")
        }

        //cy.xpath("(//button[text()='Delete'])[1]").click()
    }

    submitApplication(){
        cy.contains('Submit Application').click()
        cy.contains('Application Form Received!')
        cy.contains('Log in to Dashboard')
    }

    viewInstitutionMerchants(){
        cy.get('#route-2-tab').click()
    }
    viewInstitutionTerminals(){
        cy.get('#route-3-tab').click()
    }
    viewInstitutionTransactions(){
        cy.get('#route-4-tab').click()
    }
    viewInstitutionRoute(){
        cy.get('#route-5-tab').click()
    }
    viewInstitutionUsers(){
        cy.get('#route-6-tab').click()
    }

    viewInstitutionBranding(){
        cy.get('#route-7-tab').click()
    }
}