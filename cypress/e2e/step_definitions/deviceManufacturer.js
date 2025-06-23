import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { deviceManufacturerPage } from "../../pages/index";


const dvmPage = new deviceManufacturerPage();

When("users navigate into the device manufacturer page", () => {
    dvmPage.verifyDeviceManufacturerPage()
});



When("I view the add device manufacturer form", () => {
    // The form should be visible by default
    dvmPage.elements.modalTitle().should('be.visible');
});

Then("I should see all form fields correctly displayed", () => {
    dvmPage.verifyFormFields()
});

When("I fill in the manufacturer form with valid data:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        dvmPage.fillFormField(row.field, row.value);
    });
});

When("I click the {string} button", (buttonText) => {
    dvmPage.clickButton(buttonText)
});

Then("I should see a success message {string}", (message) => {
    dvmPage.verifySuccessMessage(message)
});

When("I click the {string} button without filling any fields", (buttonText) => {
    dvmPage.clickButton(buttonText)
});

Then("I should see the following error messages:", (dataTable) => {
    dvmPage.verifyErrorMessages(dataTable)
});

When("I fill in the manufacturer form with invalid email:", (dataTable) => {
    dvmPage.fillFormField(dataTable)
});

When("I fill in the manufacturer form with invalid website:", (dataTable) => {
    dvmPage.fillFormField(dataTable)
});

Then("I should see an error message {string}", (message) => {
    dvmPage.verifyErrorMessage(message)
});

When("I click the close icon", () => {
    dvmPage.elements.closeModalButton().click();
});

Then("the add device manufacturer form should be closed", () => {
    dvmPage.elements.modalTitle().should('not.exist');
}); 