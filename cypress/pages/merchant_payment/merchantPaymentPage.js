///<reference types="cypress"/>
import { Utility } from "../shared/utils"
import { faker } from '@faker-js/faker';


utilities = new Utility()

export class merchantPaymentPage{
    elements = {
        navigateToApp: () => cy.visit('/')
    }

    verifyDashboardTopLevelStatistics(){
        cy.get('.d-flex.flex-wrap').contains('Transaction value');
        cy.get('.d-flex.flex-wrap').contains('commission value');
        cy.get('.d-flex.flex-wrap').contains('terminals')
        cy.contains('Active');
        cy.contains('Inactive');
       
    }

    verifyOrganizationStats(){
        cy.get('.heading-4.text--grey').contains('institutions')
        cy.get('.heading-4.text--grey').contains('sub-institution')
        cy.get('.heading-4.text--grey').contains('processors')
        cy.get('.heading-4.text--grey').contains('managers')
        cy.get('.heading-4.text--grey').contains('merchants')
        cy.get('.heading-4.text--grey').contains('terminals')
    }
}