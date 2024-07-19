///<reference types="cypress"/>

export class authenticationPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.xpath("//input[@placeholder='Enter Password']"),
        loginBtn: () => cy.get('.btn'),
        dashboardElement: () => cy.get('.sc-hknOHE > .m-0'),
        loginFailureMessage: () => cy.xpath("//div[normalize-space()='Invalid username and password.']")
    }

    visitLoginPage(){
        this.elements.loginBtn().click()
        cy.get('.text--xlg').contains('Welcome to Omnipro')
        cy.get('.heading-4').contains('Log in to your dashboard')
    }

    enterCredentials(email,password){
        this.elements.emailInput().type(email)
        this.elements.passwordInput().type(password)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click()
    }

    verifyLoginSuccessful(){
        this.elements.dashboardElement().contains('Dashboard')
    }

    verifyLoginFailure(){
        this.elements.loginFailureMessage().contains('Invalid username and password')
    }
}