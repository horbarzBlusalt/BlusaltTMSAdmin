import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {institutionsPage} from "../../pages/index";
import {Utility} from "../../pages/shared/utils"
import { faker } from '@faker-js/faker';

utilities = new Utility()

const instPage = new institutionsPage()

//Institution details
const institutionInfoToView = 'rave'
const bizName = faker.company.name()
const phoneNumber = faker.phone.number()
const businessEmail = "abc"
const addressOne = faker.address.streetAddress()
const addressTwo = faker.address.streetAddress()

//Sub Institution details
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

const instEmail = faker.name.firstName()

//Director Details
const directorFirstName = faker.name.firstName()
const directorLastName = faker.name.lastName()

const country = "Nigeria"

const representativePhoneNum = "8172882930"

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

When('users enter business profile details during {string}', (onboarding) => {
    instPage.enterBusinessProfileDetails(bizName, phoneNumber, businessEmail, addressOne, addressTwo, onboarding)
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

Then('enter custom domain details during {string}', (onboarding) => {
    instPage.enterCustomDomainDetails(onboarding)
})

When('users click on send invite', () => {
    instPage.clickSendInvite()
})

When('users enter institution details and sends invite', () => {
    instPage.enterInstitutionDetails(bizName,instEmail)
})

Then('users can send institution invite successfully', () =>{
    instPage.verifyInstitutionInvite(instEmail)
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

When('users enter director information during {string}', (onboarding) => {
    instPage.enterDirectorInformation(directorFirstName, directorLastName, businessEmail, false, onboarding)
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

When('users visit the generated onboarding link', () => {
    instPage.visitOnboardingLink()
})

When('users provides matching passwords', () => {
    instPage.enterMatchingPasswords()
})

When('users users enter basic information', () => {
    instPage.enterRepresentativeBasicInformation(firstName, lastName, representativePhoneNum)
})

When('users enter one time password', () => {
    instPage.enterOTP()
})

When('preferred services is selected', () => {
    instPage.selectPreferredServices()
})

Then('verify the application page', () => {
    instPage.verifyApplicationPage()
})

When('user attempts to edit application', () => {
    instPage.editApplication()
})

Then('user submits application', () => {
    instPage.submitApplication()
})