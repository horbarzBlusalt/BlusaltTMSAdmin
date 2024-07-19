import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {authenticationPage} from "../../pages/index";

const loginPage = new authenticationPage()

Given('users navigate to the app', () => {
    loginPage.elements.navigateToApp()
})

When('users visit the login page', () => {
    loginPage.visitLoginPage()
})

When('users enter {string} and {string}', (email, password) => {
    loginPage.enterCredentials(email,password)
})

When('users click login button', ()=> {
    loginPage.clickLoginBtn()
})

Then('login is successful', () => {
    loginPage.verifyLoginSuccessful()
})

Then('login fails', () => {
    
})
