import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {subInstitutionsPage} from "../../pages/index";
import {Utility} from "../../pages/shared/utils"
import { faker } from '@faker-js/faker';

const subInstPage = new subInstitutionsPage()

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

const nameOfSubInstitution = 'Budu'


When('users click on the add subinstitution button', ()=> {
    subInstPage.clickAddSubInstitutionBtn()
})

When('users enter subinstitution director information', () => {
    subInstPage.enterSubInstitutionDirectorInformation(firstName, lastName)
})

When('users click subinstitution to view details', () => {
    subInstPage.viewSubInstitutionDetails()
})

Then('users can verify subinstitution details', () => {
    subInstPage.verifySubInstitutionDetails()
})

When('users navigate into subinstitution module', () => {
    subInstPage.navigateToSubInstitutionModule()
})

When('users click the merchant tab', () =>{
    subInstPage.clickMerchantTab()
})

When('users click specific subinstitution to view details', ()=>{
    subInstPage.viewSpecificSubInstitutionDetails(nameOfSubInstitution)
})

When('users users enter merchant basic information', () => {
    subInstPage.enterMerchantBasicInformation()
})