///<reference types="cypress"/>
import { util } from "chai"
import { Utility } from "../../shared/utils"

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
        sendInviteBtn: () => cy.get('.justify-content-sm-end > :nth-child(3) > :nth-child(1)'),
        addInstitutionBtn: () => cy.get('.justify-content-sm-end > :nth-child(3) > :nth-child(2)'),
        institutionEmailInput: () => cy.get('#email'),
        institutionNameInput: () => cy.get('#institutionName'),
        submitInviteBtn: () => cy.get('.flex__center > .btn--secondary'),
        notificationMessage:() => cy.get('.Toastify__toast-body'),
        institutionProfileNameInput: () => cy.get('#name'),
        institutionSectorSelector:() => cy.get('#sector'),
        institutionPhoneNumberInput: () => cy.get('.react-tel-input'),
        institutionProfileEmailInput: () => cy.get('#bizEmail'),
        businessCityInput: () => cy.get('#city'),
        addressLineOneInput: () => cy.get('#addressLine1'),
        addressLineTwoInput: () => cy.get('#addressLine2'),
        saveAndContinueBtn: () => cy.get('.btn--secondary'),
        supportEmailInput: () => cy.get('#supportEmail'),
        disputeEmailInput: () => cy.get('#disputeEmail'),
        busInstagramLinkInput: () => cy.get('#instagramLink'),
        busFacbookLinkInput: () => cy.get('#facebookLink'),
        busTwitterLinkInput: () => cy.get('#twitterLink'),
        institutionSendInvite: () => cy.get('.justify-content-sm-end > div.d-flex > :nth-child(1)'),
        loginBtn: () => cy.get('.btn--primary'),
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
        this.elements.institutionEmailInput().type(instEmail+"@vph0lgs0.mailosaur.net")
        this.elements.submitInviteBtn().click()
    }

    verifyInstitutionInvite(instEmail){
        this.elements.notificationMessage().contains('Invite Sent Successfully')
        utilities.getEmailMessage(instEmail)
    }

    enterInstitutionProfileDetails(name, phoneNumber, businessEmail, addressOne, addressTwo){
        cy.contains("Institution Profile Information")
        cy.contains("Institution Name")
        cy.contains("Business Sector")
        cy.contains('Business Size')
        this.elements.institutionProfileNameInput().clear().type(name)
        cy.get('#react-select-2-placeholder').click({force: true})
        cy.get('#react-select-2-option-0').click({force: true})
        cy.get('#react-select-3-placeholder').click({force: true})
        cy.get('#react-select-3-option-0').click({force: true})
        this.elements.phoneNumberInput().type(phoneNumber)
        this.elements.institutionProfileEmailInput().type(businessEmail)
        cy.get('#react-select-4-placeholder').click({force: true})
        cy.get('#react-select-4-option-0').click({force: true})
        cy.get('#react-select-5-placeholder').click({force: true})
        cy.get('#react-select-5-option-0').click({force: true})
        this.elements.businessCityInput().type('Lekki')
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
        cy.get('#businessRegNo').type('RN34567890')
        utilities.uploadDocuments("business-registration")
        cy.get('#taxIdNo').type('TIN'+utilities.getRandomNumber())
        utilities.uploadDocuments( "tax-identification")
        utilities.uploadDocuments("certificate-of-incorporation")
        utilities.uploadDocuments("memom-mart")
        utilities.uploadDocuments("proof-of-address")
        this.clickSaveContinue()
    }

    enterBusinessContact(firstName, lastName, country){
        cy.get('bizConFirstName').type(firstName)
        cy.get('bizConLastName').type(lastName)
        cy.get('bizConEmail').type(firstName+utilities.getRandomNumber()+"@vph0lgs0.mailosaur.net")
        this.elements.phoneNumberInput().type('08123456780')
        cy.xpath("//input[@name='bizConDateOfBirth']").type('12/01/1990')
        cy.get('#react-select-6-placeholder').type("Nigeria {enter}")
        // cy.get('#react-select-6-placeholder').type("Nigeria {enter}")
        //cy.get('#react-select-6-option-0').click({force: true})

    }

    viewInstitutionInfo(nameOfInstitution){
        cy.contains(nameOfInstitution).click()
        cy.get('div.header__badge > .active').contains('Institution Info')
        cy.xpath("//span[@class='text-uppercase text--grey'][normalize-space()='Transaction value']")
        cy.xpath("//span[contains(@class,'text-uppercase text--grey')][normalize-space()='Commission Value']")
        cy.xpath("//span[contains(@class,'text-uppercase text--grey')][normalize-space()='Sub-institution']")
        cy.xpath("//span[contains(@class,'text-uppercase text--grey')][normalize-space()='terminals']")
        cy.get('.col-lg-5 > .bg--white > .heading-3').contains('Transaction Status')
        cy.get('.col-lg-4 > .bg--white > .heading-3').contains('Chargeback Status')
        cy.get('.col-lg-3 > .bg--white > .heading-3').contains('Charges Distribution')
        cy.get('.col-md-5 > :nth-child(1) > .text-uppercase').contains('Institution name')
        cy.get(':nth-child(2) > .text-uppercase').contains('Institution code')
        cy.get(':nth-child(3) > .text-uppercase').contains('sector')
        cy.get(':nth-child(4) > .text-uppercase').contains('email address')
        cy.get(':nth-child(5) > .text-uppercase').contains('Terminal prefix')
        cy.get(':nth-child(6) > .text-uppercase').contains('country')
        cy.get(':nth-child(7) > .text-uppercase').contains('address')
        cy.get(':nth-child(8) > .text-uppercase').contains('Institution Domain')
        cy.get(':nth-child(9) > .text-uppercase').contains('Merchant Domain')
        cy.get(':nth-child(10) > .text-uppercase').contains('Status')
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
}