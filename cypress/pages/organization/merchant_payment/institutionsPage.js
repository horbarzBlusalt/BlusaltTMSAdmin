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
        supportEmailInput: () => cy.get('#supportEmail'),
        disputeEmailInput: () => cy.get('#disputeEmail'),
        busInstagramLinkInput: () => cy.get('#instagramLink'),
        busFacbookLinkInput: () => cy.get('#facebookLink'),
        busTwitterLinkInput: () => cy.get('#twitterLink'),
        institutionSendInvite: () => cy.get('.justify-content-sm-end > div.d-flex > :nth-child(1)'),
        loginBtn: () => cy.get('.btn--primary'),
        businessName: () => cy.get('#name'),
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
        this.elements.institutionEmailInput().type(instEmail+"@vph0lgs0.mailosaur.net")
        this.elements.submitInviteBtn().click()
    }

    verifyInstitutionInvite(instEmail){
        this.elements.notificationMessage().contains('Invite Sent Successfully')
        utilities.getEmailMessage(instEmail)
    }

    enterAdminProfileDetails(firstName, lastName, email, phoneNumber){
        cy.contains("Admin Contact")
        this.elements.firstNameInput().scrollIntoView().type(firstName, {force:true});
        this.elements.lastNameInput().scrollIntoView().type(lastName, {force:true});
        this.elements.adminEmailInput().scrollIntoView().type(email+utilities.getRandomNumber()+'@vph0lgs0.mailosaur.net', {force:true});
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.saveAndContinueBtn().click()
    }

    enterBusinessProfileDetails(bizName, phoneNumber, businessEmail, addressOne, addressTwo){
        cy.contains("Business Profile Information")
        cy.get(':nth-child(1) > .form-group > .flex__start > #name').scrollIntoView().type(bizName, {force:true});
        cy.get('#react-select-5-placeholder').click({force: true})
        cy.get('#react-select-5-option-0').click({force: true})
        cy.contains('Choose business emplyee Size').click({force: true})
        cy.get('#react-select-6-option-0').click({force: true})
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.institutionProfileEmailInput().type(businessEmail+utilities.getRandomNumber()+'@yopmail.com')
        cy.get('#react-select-7-placeholder').click({force: true})
        cy.get('#react-select-7-option-0').click({force: true})
        cy.get('#react-select-8-placeholder').click({force: true})
        cy.get('#react-select-8-option-0').click({force: true})
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

    uploadBusinessDocuments(){
        cy.get('#businessRegNo').type('RN3'+utilities.getRandomNumber())
        utilities.uploadDocument("business-registration")
        cy.get('#taxIdNo').type('TIN'+utilities.getRandomNumber())
        utilities.uploadDocument( "tax-identification")
        cy.wait(100)
        utilities.uploadDocument("certificate-of-incorporation")
        utilities.uploadDocument("memom-mart")
        utilities.uploadDocument("proof-of-address")
        cy.wait(8000)
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'File uploaded successfully');
        this.clickSaveContinue()
    }

    enterBusinessContactInformation(firstName, lastName, country){
        cy.get('#bizConFirstName').scrollIntoView().type(firstName, {force:true})
        cy.get('#bizConLastName').scrollIntoView().type(lastName, {force:true})
        cy.get('#bizConEmail').type(firstName+utilities.getRandomNumber()+"@vph0lgs0.mailosaur.net")
        this.elements.phoneNumberInput().type('08123456780')
        cy.xpath("//input[@name='bizConDateOfBirth']").type('12/01/1990')
        cy.get('.text--lg').click()
        cy.contains('Enter the country').click({force:true})
        cy.get('#react-select-9-option-0').click({force: true})
        cy.get('#react-select-10-placeholder').click({force:true})
        cy.get('#react-select-10-option-0').click({force: true})
        cy.get('#bizConCity').type('Yaba')
        cy.get('#bizConAddressLine1').type('21 Adewale Street')
        cy.get('#bizConAddressLine2').type('22 Adesanya Street')
        this.clickSaveContinue()
    }

    enterDirectorInformation(firstName,lastName,dirEmail){
        cy.get('#dirFirstName').type(firstName, {force:true})
        cy.get('#dirLastName').type(lastName, {force:true})
        cy.get('#dirEmail').type(dirEmail+utilities.getRandomNumber()+'@yopmail.com', {force:true})
        cy.xpath("//input[@name='dirDateOfBirth']").type('12/01/1990')
        this.elements.phoneNumberInput().type('08123456780')
        utilities.uploadDocument( "director-id")
        cy.get('#react-select-11-placeholder').click({force:true})
        cy.get('#react-select-11-option-0').click({force: true})
        cy.get('#dirIdentityNo').type('SBIN'+utilities.getRandomNumber())
        cy.xpath("//input[@name='dirIdentityIssuedDate']").type('12/01/2022')
        cy.xpath("//input[@name='dirIdentityExpiredDate']").type('12/01/2028')
        cy.get('#react-select-12-placeholder').click({force:true})
        cy.get('#react-select-12-option-0').click({force: true})
        cy.get('#react-select-13-placeholder').click({force:true})
        cy.get('#react-select-13-option-0').click({force: true})
        cy.get('#dirCity').type('Yaba')
        cy.get('#dirAddressLine1').type('21 Adewale Street')
        cy.get('#dirAddressLine2').type('22 Adesanya Street')
        cy.wait(2000)
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'File uploaded successfully');
        this.elements.addDirBtn().click()
        this.elements.saveAndContinueBtn().click()
    }

    enterCustomDomainDetails(){
        cy.contains('Custom Domain')
        cy.get('.col-md-7 > :nth-child(2) > div.d-flex > .btn--secondary').contains('Add Institution').click()
        cy.get('#institutionDomainName').scrollIntoView().type('https://definance'+utilities.getRandomNumber()+'.io', {force:true})
        cy.get('#merchantDomainName').scrollIntoView().type('https://automerchant'+utilities.getRandomNumber()+'.io', {force:true})
        cy.get('.col-md-7 > :nth-child(2) > div.d-flex > .btn--secondary').contains('Add Institution').click()
    }

    viewInstitutionInfo(nameOfInstitution){
        if(nameOfInstitution == undefined){
            cy.get('table tr:nth-child(2)').click();

        }else{
            cy.get('#searchQuery').type(nameOfInstitution + " {enter}")
            cy.get('table tr:nth-child(2)').click();

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

    clickSendSubInstitutionInvite(){k
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
        for(let i=1; i<=6; i++){ 
            cy.xpath('//input[@aria-label="Please enter OTP character '+i+'"]').type(i)
            cy.wait(1000)
        }
        this.elements.clickContinueButton()
        
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