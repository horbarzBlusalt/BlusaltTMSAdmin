///<reference types="cypress"/>

import { faker } from '@faker-js/faker';


export class deviceManufacturerPage{
    elements = {
        manufacturerNameInput: () => cy.get('#manufacturerName'),
        manufacturerWebsiteInput: () => cy.get('#manufacturerWebsite'),
        contactEmailInput: () => cy.get('#contactEmail'),
        countryDropdown: () => cy.get('#country'),
        contactAddressInput: () => cy.get('#contactAddress'),
        phoneNumberInput: () => cy.get('#phoneNumber'),
        // manufacturerNameInput: () => cy.get('input[name="name"]'),
        // manufacturerWebsiteInput: () => cy.get('input[name="url"]'),
        // contactEmailInput: () => cy.get('input[name="email"]'),
        // countryDropdown: () => cy.get('#country'),
        // contactAddressInput: () => cy.get('input[name="address"]'),
        // phoneNumberInput: () => cy.get('input[type="tel"]'),
        cancelButton: () => cy.contains('button', 'Cancel'),
        addDeviceManufacturerButton: () => cy.contains('button', 'Add Device Manufacturer'),
        modalTitle: () => cy.contains('h4', 'Add Device Manufacturer'),
        closeModalButton: () => cy.get('svg rect').parent('svg').first()
    }

    fillFormField(field, value) {
        switch (field.toLowerCase()) {
            case 'name':
                this.elements.manufacturerNameInput().type(value);
                break;
            case 'website':
                this.elements.manufacturerWebsiteInput().type(value);
                break;
            case 'email':
                this.elements.contactEmailInput().type(value);
                break;
            case 'country':
                this.elements.countryDropdown().type(value + '{enter}');
                break;
            case 'address':
                this.elements.contactAddressInput().type(value);
                break;
            case 'phone':
                this.elements.phoneNumberInput().type(value);
                break;
        }
    }

    verifyFormFields(){
        this.elements.manufacturerNameInput().should('be.visible')
        this.elements.manufacturerWebsiteInput().should('be.visible')
        this.elements.contactEmailInput().should('be.visible')
        this.elements.countryDropdown().should('be.visible')
        this.elements.contactAddressInput().should('be.visible')
        this.elements.phoneNumberInput().should('be.visible')
    }


    verifyDeviceManufacturerPage(){
        cy.get('.main__sidebar > .list-unstyled > :nth-child(4)').click()
        cy.url().should('include', '/terminal-management/system-configuration/device-manufacturer')
        cy.get('.text-uppercase').should('contain', 'Manufacturer')
    }

    clickButton(buttonText){
        cy.contains(buttonText).click()
    }

    verifySuccessMessage(message){
        cy.contains(message).should('be.visible')
    }   

    verifyErrorMessages(dataTable){
        dataTable.hashes().forEach((row) => {
            cy.contains(row.message).should('be.visible')
        })
    }
    
    
}