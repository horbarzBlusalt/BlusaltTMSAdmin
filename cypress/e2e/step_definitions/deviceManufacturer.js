import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

class DeviceManufacturerPage {
    // Selectors
    elements = {
        manufacturerNameInput: () => cy.get('input[name="name"]'),
        manufacturerWebsiteInput: () => cy.get('input[name="url"]'),
        contactEmailInput: () => cy.get('input[name="email"]'),
        countryDropdown: () => cy.get('#country'),
        contactAddressInput: () => cy.get('input[name="address"]'),
        phoneNumberInput: () => cy.get('input[type="tel"]'),
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
}

const deviceManufacturerPage = new DeviceManufacturerPage();

Given("I am on the device manufacturer page", () => {
    cy.visit('/terminal-management/system-configuration/device-manufacturer');
});

When("I view the add device manufacturer form", () => {
    // The form should be visible by default
    deviceManufacturerPage.elements.modalTitle().should('be.visible');
});

Then("I should see all form fields correctly displayed", () => {
    deviceManufacturerPage.elements.manufacturerNameInput().should('be.visible');
    deviceManufacturerPage.elements.manufacturerWebsiteInput().should('be.visible');
    deviceManufacturerPage.elements.contactEmailInput().should('be.visible');
    deviceManufacturerPage.elements.countryDropdown().should('be.visible');
    deviceManufacturerPage.elements.contactAddressInput().should('be.visible');
    deviceManufacturerPage.elements.phoneNumberInput().should('be.visible');
});

When("I fill in the manufacturer form with valid data:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        deviceManufacturerPage.fillFormField(row.field, row.value);
    });
});

When("I click the {string} button", (buttonText) => {
    cy.contains('button', buttonText).click();
});

Then("I should see a success message {string}", (message) => {
    cy.contains(message).should('be.visible');
});

When("I click the {string} button without filling any fields", (buttonText) => {
    cy.contains('button', buttonText).click();
});

Then("I should see the following error messages:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        cy.contains(row.message).should('be.visible');
    });
});

When("I fill in the manufacturer form with invalid email:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        deviceManufacturerPage.fillFormField(row.field, row.value);
    });
});

When("I fill in the manufacturer form with invalid website:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        deviceManufacturerPage.fillFormField(row.field, row.value);
    });
});

Then("I should see an error message {string}", (message) => {
    cy.contains(message).should('be.visible');
});

When("I click the close icon", () => {
    deviceManufacturerPage.elements.closeModalButton().click();
});

Then("the add device manufacturer form should be closed", () => {
    deviceManufacturerPage.elements.modalTitle().should('not.exist');
}); 