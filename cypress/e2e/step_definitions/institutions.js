import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {institutionsPage} from "../../pages/index";
// import {users} from '../../fixtures/userData.json';


instPage = new institutionsPage()

Given('users are successfully logged in', () => {
    //cy.fixture('userData.json').as('users')
    instPage.elements.navigateToApp()
    cy.login()
})

When('users navigate into organization module', () => {
    instPage.clickSideBarToggle()
    instPage.clickOrganizationSideBar()
})

Then('users can view all institutions', () => {
    instPage.verifyInstitutionsPage()
})
