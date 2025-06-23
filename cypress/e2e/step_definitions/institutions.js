import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {institutionsPage} from "../../pages/index";
import { faker } from '@faker-js/faker';

const instPage = new institutionsPage()

//Institution details
const institutionInfoToView = 'rave'
const bizName = faker.company.name()
const institutionName = faker.company.name().split(' ')[0].replace(/[^\w\s]/gi, '')
const phoneNumber = faker.phone.number()
const businessEmail = "abc"
const addressOne = faker.address.streetAddress()
const addressTwo = faker.address.streetAddress()

//Sub Institution details
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

//Director Details
const directorFirstName = faker.name.firstName()
const directorLastName = faker.name.lastName()

const country = "Nigeria"



Given('users are successfully logged in', () => {
    //cy.fixture('userData.json').as('users')
    instPage.elements.navigateToApp()
    cy.login()
})

When('users navigate into organization module', () => {
    cy.wait(1000)
    instPage.clickSideBarToggle()
    instPage.clickOrganizationSideBar()
})

Then('users can view all institutions', () => {
    instPage.verifyInstitutionsPage()
})

When('users click on the add new institution button', () => {
    instPage.clickAddInstitution()
})

When('users enter the admin details', () => {
    instPage.enterAdminProfileDetails(firstName,lastName, businessEmail,phoneNumber)
})

When('users select the {string} organization type', (institutionType) => {
    instPage.selectOrganizationType(institutionType)
})

When('users enter business profile details', () => {
    instPage.enterBusinessProfileDetails(bizName, phoneNumber, businessEmail, addressOne, addressTwo)
})

When('users click on save button', () => {
    instPage.clickSaveContinue()
})

Then('navigate to support contact form', () => {
    instPage.enterSupportContactDetails()
})

Then('upload business documents', () =>{
    instPage.uploadBusinessDocuments()
})

Then('enter custom domain details', () => {
    instPage.enterCustomDomainDetails()
})

When('users click on send invite', () => {
    instPage.clickSendInvite()
})

When('users enter {string} {string} and sends invite', (instName, instEmail) => {
    instPage.enterInstitutionDetails(institutionName,institutionName)
})

Then('users can send {string} institution invite successfully', (instEmail) =>{
    instPage.verifyInstitutionInvite(institutionName)
})

When('view specific institution', () => {
    instPage.viewInstitutionInfo(institutionInfoToView)
})

When('users click into an institution', () => {
    instPage.viewInstitutionInfo()
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

When('users view institutions branding', () => {
    instPage.viewInstitutionBranding()
})

When('users enter business contact information', () => {
    instPage.enterBusinessContactInformation(firstName, lastName, country)
})

When('users enter director information', () => {
    instPage.enterDirectorInformation(directorFirstName, directorLastName, businessEmail)
})

When('users view institutions users', () => {
    instPage.viewInstitutionUsers()
})

When('users click the send invite button', () => {
    instPage.clickSendSubInstitutionInvite()
})

Then('{string} subinstitution users are invited successfully', (instEmail) => {
    instPage.verifySubInstitutionInvite(institutionName)
})

When('users visit the generated onboarding link', () => {
    instPage.visitOnboardingLink()
})

When('users provides matching passwords', () => {
    instPage.enterMatchingPasswords()
})

When('users users enter basic information', () => {
    instPage.enterRepresentativeBasicInformation(firstName, lastName, phoneNumber)
})

When('users enter one time password', () => {
    instPage.enterOTP()
})

Then('users can view preview page and complete application', () => {
    instPage.applicationPreviewPage()
})

Then('users can search',()=>{
    instPage.searchInstitution('RAVE')
})

Then('users can filter',()=>{
    instPage.filterByStatus()
    instPage.resetFilter()
})