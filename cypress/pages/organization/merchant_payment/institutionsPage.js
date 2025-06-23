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
        tableColumnOne: () => cy.get('.table__head > tr > :nth-child(1)'),
        tableColumnTwo: () => cy.get('.table__head > tr > :nth-child(2)'),
        tableColumnThree: () => cy.get('.table__head > tr > :nth-child(3)'),
        tableColumnFour: () => cy.get('.table__head > tr > :nth-child(4)'),
        tableColumnFive: () => cy.get('.table__head > tr > :nth-child(5)'),
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
        submitApplicationButton: () => cy.get('.btn').contains('Submit Application'),
        searchInput: () => cy.get('#searchQuery'),
        saveFilter:() => cy.get('button.btn--secondary').contains('Save Filter'),
        selectBusinessCountrydropdown: () => cy.get('#bizConCountry'),
        selectBusinessStreetDropdown: () => cy.get('#bizConState'),
        selectDirCountryDropdown: () => cy.get('#dirCountry'),
        selectDirStateDropdown: () => cy.get('#dirState'),
        selectCountryDropdown: () => cy.get('#country'),
        selectStateDropdown: () => cy.get('#state'),
        selectDirectorIdentityDropdown: () => cy.get('#dirIdentityType'),
    }

    clickSideBarToggle(){
        this.elements.toggleSB().click()
    }

    clickOrganizationSideBar(){
        this.elements.organizationSB().click()
    }

    searchInstitution(keyword){
        cy.intercept('GET','/api/authentication-service/institution?size=10&page=1&isBlacklisted=false&search='+keyword+'+').as('searchResult')
        this.elements.searchInput().clear().type(keyword +" {enter}")
        cy.wait('@searchResult').its('response.statusCode').should('eq',200)
        cy.get('tbody tr')
            .should('have.length.at.least', 1)
    
    }

    filterByParameters(institutionID, institutionName){
        cy.get('#filterDropdownButton').click()
        if(institutionID !== null){
            cy.get('#institutionId').type(institutionID)
            this.elements.saveFilter().click()
        }
        cy.get('#name').type(institutionName)
        this.elements.saveFilter().click()  
    }

    filterByStatus(){
        cy.get('#filterDropdownButton').click()
        cy.get('#Unlocked').click()
        this.elements.saveFilter().click()
        

        cy.get('#filterDropdownButton').click()
        cy.get('#Locked').click()
        this.elements.saveFilter().click()
        
    }

    resetFilter(){
        cy.get('#filterDropdownButton').click()
        cy.get('button.btn--light-gray--bordered').last().click()
    }

    exportCSV(){
        cy.contains('Export CSV').click()
        cy.get('.primary__header')
            .should('be.visible')
            .and('contain', 'Download Report')
        
        cy,get('button.btn--secondary').contains('Download').click()
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
        this.elements.addInstitutionBtn().should('be.visible').click()
        // cy.contains('Terminal Owner').click()
        // cy.get('.cta > .btn--secondary').contains('Continue').click()
    }

    enterInstitutionDetails(instName, instEmail){
        this.elements.institutionNameInput().type(instName)
        this.elements.institutionEmailInput().type(instEmail+"@ujkaarza.mailosaur.net")
        this.elements.submitInviteBtn().click()
        cy.intercept('POST','/api/authentication-service/commons/send-invitation').as('sendInvite')
    }

    verifyInstitutionInvite(instEmail){
        cy.wait('@sendInvite',{timeout:10000}).its('response.statusCode').should('eq', 200);
        this.elements.notificationMessage().contains('Invite Sent Successfully')
        utilities.getLinkFromEmail(instEmail)
    }

    selectOrganizationType(institutionType){
        cy.get('.p-2').should('be.visible').contains(institutionType).click()
        cy.get('button.btn--secondary').contains('Continue').click()
    }

    enterAdminProfileDetails(firstName, lastName, email, phoneNumber){
        cy.contains("Admin Contact")
        this.elements.firstNameInput().scrollIntoView().type(firstName, {force:true});
        this.elements.lastNameInput().scrollIntoView().type(lastName, {force:true});
        this.elements.adminEmailInput().scrollIntoView().type(email+utilities.getRandomNumber()+'@ujkaarza.mailosaur.net', {force:true});
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.saveAndContinueBtn().click()
    }

    enterBusinessProfileDetails(bizName, phoneNumber, businessEmail, addressOne, addressTwo){
        cy.contains("Business Profile Information")
        cy.get(':nth-child(1) > .form-group > .flex__start > #name').scrollIntoView().type(bizName, {force:true});
        cy.get('#sector').type('Nanotechnology' + " {enter}")
        cy.get('#bizSize').type('Personal'+ " {enter}")
        this.elements.selectCountryDropdown().click({force:true})
        this.elements.selectCountryDropdown().type('Nigeria')
        this.elements.selectCountryDropdown().type('{enter}')
        this.elements.selectStateDropdown().click({force:true})
        this.elements.selectStateDropdown().type('Lagos')
        this.elements.selectStateDropdown().type('{enter}')
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.institutionProfileEmailInput().type(businessEmail+utilities.getRandomNumber()+'@yopmail.com')
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
        cy.intercept('POST','/api/authentication-service/documents/upload').as('uploadDoc')
        utilities.uploadDocument("proof-of-address")
        cy.wait('@uploadDoc',{timeout:10000})
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'File uploaded successfully');
        this.clickSaveContinue()
    }

    enterBusinessContactInformation(firstName, lastName, country){
        cy.get('#bizConFirstName').scrollIntoView().type(firstName, {force:true})
        cy.get('#bizConLastName').scrollIntoView().type(lastName, {force:true})
        cy.get('#bizConEmail').type(firstName+utilities.getRandomNumber()+"@ujkaarza.mailosaur.net")
        this.elements.phoneNumberInput().type('08123456780')
        cy.xpath("//input[@name='bizConDateOfBirth']").type('12/01/1990')
        cy.get('.text--lg').click()
        this.elements.selectBusinessCountrydropdown().click({force:true})
        this.elements.selectBusinessCountrydropdown().type('Nigeria')
        this.elements.selectBusinessCountrydropdown().type('{enter}')
        //cy.contains('Choose Country').last().click({force:true})
        this.elements.selectBusinessStreetDropdown().click({force:true})
        this.elements.selectBusinessStreetDropdown().type('Lagos')
        this.elements.selectBusinessStreetDropdown().type('{enter}')
        //cy.get('#react-select-7-option-0').click({force: true})
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
        cy.intercept('POST','/api/authentication-service/documents/upload').as('uploadDoc')
        this.elements.selectDirCountryDropdown().click({force:true})
        this.elements.selectDirCountryDropdown().type('Nigeria')
        this.elements.selectDirCountryDropdown().type('{enter}')
        this.elements.selectDirectorIdentityDropdown().click({force:true})
        this.elements.selectDirectorIdentityDropdown().type('International Passport')
        this.elements.selectDirectorIdentityDropdown().type('{enter}')  
        cy.get('#dirIdentityNo').type('SBIN'+utilities.getRandomNumber())
        cy.xpath("//input[@name='dirIdentityIssuedDate']").type('12/01/2022')
        cy.xpath("//input[@name='dirIdentityExpiredDate']").type('12/01/2028')
        this.elements.selectDirStateDropdown().click({force:true})
        this.elements.selectDirStateDropdown().type('Lagos')
        this.elements.selectDirStateDropdown().type('{enter}')
        cy.get('#dirCity').type('Yaba')
        cy.get('#dirAddressLine1').type('21 Adewale Street')
        cy.get('#dirAddressLine2').type('22 Adesanya Street')
        cy.wait('@uploadDoc',{timeout:10000})
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'File uploaded successfully');
        this.elements.addDirBtn().should('be.visible').click()
        this.elements.saveAndContinueBtn().click()
    }

    enterCustomDomainDetails(){
        cy.contains('Custom Domain')
        cy.get('.btn--secondary').contains('Add Institution').click()
        cy.get('#institutionDomainName').scrollIntoView().type('https://definance'+utilities.getRandomNumber()+'.io', {force:true})
        cy.get('#merchantDomainName').scrollIntoView().type('https://automerchant'+utilities.getRandomNumber()+'.io', {force:true})
        cy.get('.btn--secondary').contains('Add Institution').click()
    }

    applicationPreviewPage(){
        cy.get('.heading-1').contains('Application Preview')
        cy.intercept('POST','/api/authentication-service/institution/public').as('submitApplication')
        this.elements.submitApplicationButton().click()
        cy.wait('@submitApplication').its('response.statusCode').should('eq', 200);
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

    clickSendSubInstitutionInvite(){
        cy.wait(1000)
        this.elements.institutionSendInvite().click()
        cy.intercept('POST','/api/authentication-service/commons/send-invitation').as('sendInvite')
    }

    verifySubInstitutionInvite(instEmail){
        cy.wait('@sendInvite').its('response.statusCode').should('eq', 200);
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