///<reference types="cypress"/>
import { Utility } from "../shared/utils"
import { faker } from '@faker-js/faker';


utilities = new Utility()

export class merchantPaymentPage{
    elements = {
        navigateToApp: () => cy.visit('/')
    }

    verifyDashboardTopLevelStatistics(){
        cy.get('.d-flex.flex-wrap').contains('Transaction value').next().should('contain.text', '₦');
        cy.get('.d-flex.flex-wrap').contains('commission value').next().should('contain.text', '₦');
        cy.get('.d-flex.flex-wrap').contains('terminals').parent().within(() => {
            cy.contains('Active');
            cy.contains('Inactive');
        });
    }

    verifyOrganizationStats(){
        cy.get('.heading-4.text--grey').contains('institutions').next().should('match', /\d+/);
        cy.get('.heading-4.text--grey').contains('sub-institution').next().should('match', /\d+/);
        cy.get('.heading-4.text--grey').contains('processors').next().should('match', /\d+/);
        cy.get('.heading-4.text--grey').contains('managers').next().should('contain.text', '0');
        cy.get('.heading-4.text--grey').contains('merchants').next().should('match', /\d+/);
        cy.get('.heading-4.text--grey').contains('terminals')
    }
}