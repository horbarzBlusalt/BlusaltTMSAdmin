///<reference types="cypress"/>
import { Utility } from "../../shared/utils"
import { faker } from '@faker-js/faker';

utilities = new Utility()

export class subInstitutionsPage{
    elements = {
        addSubInstitutionBtn: () => cy.contains('Add New Sub-Institution'),
        addDirBtn: () => cy.contains('Add Director'),
        phoneNumberInput: () => cy.xpath('//input[@type="tel"]'),
        createSubInstBtn: () => cy.contains('Create Sub Institution')

    }

    navigateToSubInstitutionModule(){
        cy.get('.tabbed__header > :nth-child(2) > a').contains('Sub-Institutions').click()
    }

    clickAddSubInstitutionBtn(){
        this.elements.addSubInstitutionBtn().click()
    }

    enterSubInstitutionDirectorInformation(firstName,lastName){
        const dirEmail = firstName+lastName
        cy.get('#dirFirstName').type(firstName, {force:true})
        cy.get('#dirLastName').type(lastName, {force:true})
        cy.get('#dirEmail').type(dirEmail+'@yopmail.com', {force:true})
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
        this.elements.createSubInstBtn().click()
    }

    viewSubInstitutionDetails(){
        cy.get('table tbody tr:nth-child(1)').click();
    }

    verifySubInstitutionDetails(){
        cy.contains('SUB-INSTITUTION NAME')
        cy.contains('Institution')
        cy.contains('Sub-Institution Details')
        cy.contains('SUB-INSTITUTION CODE')
        cy.contains('no of merchants')
        cy.contains('email address')
        cy.contains('phone number')
        cy.get('.flex__center > .btn').contains('Close').click()
    }

    clickMerchantTab(){
        cy.get('#route-1-tab').contains('Merchants').click()
    }

    viewSpecificSubInstitutionDetails(subinstitutionName){
        //cy.get('#searchQuery').type(subinstitutionName + " {enter}")
        cy.get('#filterDropdownButton').click()
        cy.get('#subInstitutionId').type('84daa3435716479fa492b78d2e80c788')
        cy.contains('Save Filter').click()
        cy.wait(1000)
        cy.get('table tbody tr:nth-child(1)').click();
    }

    enterMerchantBasicInformation(){
        const companyName = faker.company.name()
        cy.get('#name').type(companyName)
        utilities.selectDropdown('Select','3')
        utilities.selectDropdown('Choose','0')
        utilities.selectDropdown('Choose Country','4')
        utilities.selectDropdown('Choose State','1')
        cy.get('#city').type('Yaba')
        cy.get('#bizEmail').type(companyName+"@yopmail.com")
        cy.xpath('(//input[@type="tel"])[1]').type('08173400780')
        cy.get('#addressLine1').type(faker.address.streetAddress())

        cy.get('#adminFirstName').type(faker.person.firstName())
        cy.get('#adminLastName').type(faker.person.lastName())
        cy.xpath('(//input[@type="tel"])[2]').type('08173456780')

        cy.get('.btn').click()
        cy.get('#Yes').click()
        cy.get('.btn').click()
    }
}