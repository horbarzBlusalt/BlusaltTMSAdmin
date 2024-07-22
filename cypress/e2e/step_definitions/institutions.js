import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {institutionsPage} from "../../pages/index";
import {Utility} from "../../pages/shared/utils"
util = new Utility()

const instPage = new institutionsPage()
const institutionInfoToView = 'aas'
const bizName = "Adekunle and Sons"
const phoneNumber = "09012345678"
const businessEmail = "xyz@yopmail.com"
const addressOne = "Address One"
const addressTwo = "Address Two"



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

When('users click on the add new institution button', () => {
    instPage.clickAddInstitution()
})

When('users enter institution profile details', () => {
    instPage.enterInstitutionProfileDetails(bizName,phoneNumber, businessEmail, addressOne, addressTwo)
})

When('users click on save button', () => {
    instPage.clickSaveContinue()
})

Then('navigate to support contact form', () => {
    instPage.enterSupportContactDetails()
})

When('users click on send invite', () => {
    instPage.clickSendInvite()
})

When('users enter {string} {string} and sends invite', (instName, instEmail) => {
    instPage.enterInstitutionDetails(instName,instEmail)
})

Then('users can send {string} institution invite successfully', (instEmail) =>{
    instPage.verifyInstitutionInvite(instEmail)
})

When('users click into an institution', () => {
    instPage.viewInstitutionInfo(institutionInfoToView)
})

When('users view subinstitution', () => {
    instPage.viewInstitutionSubInstitutions()
})

When('users view institutions merchants', () => {
    instPage.viewInstitutionMerchants()
})

When('users view institutions terminals', () => {
    instPage.viewInstitutionTerminals()
})

When('users view institutions transactions', () => {
    instPage.viewInstitutionRoute()
})

When('users view institutions route', () => {
    instPage.viewInstitutionRoute()
})

When('users view institutions users', () => {
    instPage.viewInstitutionUsers()
})

When('users click the send invite button', () => {
    instPage.clickSendSubInstitutionInvite()
})

Then('{string} subinstitution users are invited successfully', (instEmail) => {
    instPage.verifySubInstitutionInvite(instEmail)
})