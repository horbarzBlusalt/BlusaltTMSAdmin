///<reference types="cypress"/>

export class institutionsPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        toggleSB: ()=> cy.get('.main__sidebar > .navbar-toggler'),
        organizationSB: () => cy.get('.main__sidebar > .list-unstyled > :nth-child(3) > .ps-3'),
        moduleName: () => cy.get('.sub__sidebar__name'),
        tableColumnOne: () => cy.get('.table__head > .pointer > :nth-child(1)'),
        tableColumnTwo: () => cy.get('.table__head > .pointer > :nth-child(2)'),
        tableColumnThree: () => cy.get('.table__head > .pointer > :nth-child(3)'),
        tableColumnFour: () => cy.get('.table__head > .pointer > :nth-child(4)'),
        tableColumnFive: () => cy.get('.table__head > .pointer > :nth-child(5)'),
    }

    clickSideBarToggle(){
        this.elements.toggleSB().click()
    }

    clickOrganizationSideBar(){
        this.elements.organizationSB().click()
    }

    verifyInstitutionsPage(){
        this.elements.moduleName().contains("Organization")
        this.elements.tableColumnOne().contains("INSTITUTION")
        this.elements.tableColumnTwo().contains("phone number")
        this.elements.tableColumnThree().contains("Status")
        this.elements.tableColumnFour().contains("Date")
        this.elements.tableColumnFive().contains("Actions")
    }
}