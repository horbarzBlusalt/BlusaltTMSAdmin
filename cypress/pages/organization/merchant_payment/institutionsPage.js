///<reference types="cypress"/>
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
        institutionProfileNameInput: () => cy.get(':nth-child(1) > .form-group > .flex__start > #name'),
        institutionPhoneNumberInput: () => cy.get('.react-tel-input'),
        institutionProfileEmailInput: () => cy.get('#bizEmail'),
        businessCityInput: () => cy.get('#city'),
        addressLineOneInput: () => cy.get('#addressLine1'),
        addressLineTwoInput: () => cy.get('#addressLine2'),
        saveAndContinueBtn: () => cy.get(':nth-child(11) > .btn--secondary'),
        supportEmailInput: () => cy.get('#supportEmail'),
        disputeEmailInput: () => cy.get('#disputeEmail'),
        busInstagramLinkInput: () => cy.get('#instagramLink'),
        busFacbookLinkInput: () => cy.get('#facebookLink'),
        busTwitterLinkInput: () => cy.get('#twitterLink'),
        institutionSendInvite: () => cy.get('.justify-content-sm-end > div.d-flex > :nth-child(1)'),

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
        cy.get('.title').contains("Add Institution")
        cy.contains("Institution Profile Information")
        cy.contains("Institution Name")
        cy.contains("Business Sector")
        cy.contains('Business Size')
        this.elements.institutionProfileNameInput().type(name)
        //this.elements.institutionPhoneNumberInput().type(phoneNumber)
        this.elements.institutionProfileEmailInput().type(businessEmail)
        this.elements.businessCityInput().type('Lekki')
        this.elements.addressLineOneInput().type(addressOne)
        this.elements.addressLineTwoInput().type(addressTwo)
    }

    clickSaveContinue(){
        this.elements.saveAndContinueBtn().click()
    }

    enterSupportContactDetails(){
        cy.get('.text--lg').contains('Support Contact')
        this.elements.supportEmailInput().type('support@yopmail.com')
        this.elements.disputeEmailInput().type('dispute@yopmail.com')
        this.elements.busInstagramLinkInput().type('https://instgram.com/definance')
        this.elements.busFacbookLinkInput().type('https://fbook.com/definance')
        this.elements.busTwitterLinkInput().type('https://x.com/definance')   
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
        cy.get(':nth-child(8) > .text-uppercase').contains('Domain')
        cy.get(':nth-child(9) > .text-uppercase').contains('Status')
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
        utilities.getEmailMessage(instEmail)
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