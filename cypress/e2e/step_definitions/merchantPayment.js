import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {Utility} from "../../pages/index"
import { merchantPaymentPage } from "../../pages/index";

utilities = new Utility()
merchantPage = new merchantPaymentPage()

Given('users are successfully logged in', () => {
    merchantPage.elements.navigateToApp()
    cy.login()
})

When('users navigate into merchant payment dashboard', () => {
    merchantPage.verifyDashboardTopLevelStatistics()
    merchantPage.verifyOrganizationStats()
})

Then('we are done', ()=> {

})

