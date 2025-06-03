///<reference types="cypress"/>
import { Utility } from "../shared/utils"
import { faker } from '@faker-js/faker';


utilities = new Utility()

export class merchantPaymentPage{
    elements = {
        navigateToApp: () => cy.visit('/'),
        dateSelection: () => cy.get('#date-select-label'),
        thisYearSelector: () => cy.contains('This Year'),
        lastYearSelector: () => cy.contains('Last Year'),
        last3MonthsSelector: () => cy.contains('Last 3 Months'),
        last6MonthsSelector: () => cy.contains('Last 6 Months'),
        lastMonthsSelector: () => cy.contains('Last Months'),
        todaySelector: () => cy.contains('Today'),
        applyfilterButton: () => cy.contains('Apply Filters'),
        dashboardValues: () => cy.get('div .value-text.black.text-break.fw-bold').last(),
        terminalValues: () => cy.get('div .value-text.black.text-break.fw-bold').first(),
        
    }

    filterByDate(){
        this.elements.dateSelection().click();
        this.elements.thisYearSelector().click();
        this.elements.applyfilterButton().click();
    }

    verifyDashboardValues(){
        this.elements.dashboardValues().should(($el) => {
            const text = $el.text().trim();
            const numericValue = parseFloat(text);
            expect(numericValue).to.be.a('number');
            expect(numericValue).to.be.greaterThan(0);
        });
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

    verifyRegionalAnalysis(){
        cy.get('.heading-3.text--grey').contains('Regional Analysis')
        cy.contains('text', 'NORTH CENTRAL')
        cy.contains('text', 'NORTH EAST')
        cy.contains('text', 'NORTH WEST')
        cy.contains('text', 'SOUTH EAST')
        cy.contains('text', 'SOUTH WEST')

        //switch to state
        cy.get('#domainDropdownButton').click()
        cy.contains('State').click()
        cy.contains('text', 'ABIA').should('be.visible')
        cy.contains('text', 'ADAMAWA').should('be.visible')
        cy.contains('text', 'AKWA IBOM').should('be.visible')
        cy.contains('text', 'ANAMBRA').should('be.visible')
        cy.contains('text', 'BAUCHI').should('be.visible')
        cy.contains('text', 'BAYELSA').should('be.visible')
        cy.contains('text', 'BENUE').should('be.visible')
    }

    merchantStatus(){
        cy.get('#domainDropdownButtonactiveMerchant').click()
        cy.contains('Least Active').click()
    }

    verifyTransactionsPage(){
        cy.contains('Transaction').click()
        cy.url().should('include', '/transactions/overview')
        this.elements.dateSelection().scrollIntoView()
        cy.contains('Total Transaction value').should('be.visible')
        cy.contains('Transaction volume').should('be.visible')
        cy.contains('chargeback value').should('be.visible')
        cy.contains('chargeback volume').should('be.visible')
        this.filterByDate()
    }

    verifyTerminalValues(){
        this.elements.terminalValues().should(($el) => {
            const text = $el.text().trim();
            const numericValue = parseFloat(text);
            expect(numericValue).to.be.a('number');
            expect(numericValue).to.be.greaterThan(0);
        });
    }

    verifyTerminalsPage(){
        cy.contains('Terminals').click()
        cy.url().should('include', '/terminals/manage-terminal')
        this.elements.dateSelection().scrollIntoView()
        this.filterByDate()
        this.verifyTerminalValues()
    }

    searchTerminals(){
        utilities.search('2BFS1')
    }

    filterTerminalsByAnyDate(){
        utilities.filterByAnyDate()
    }

    exportTerminalsCSV(){
        utilities.exportCSV()
    }

    viewTerminalInformation(){
        cy.get('.table__wrapper.px-2') // Select the table wrapper
            .find('.text-center.pill--success.undefined') // Find the specific element with the provided classes
            .contains('Active') // Ensure it contains the text "Active" for more specificity
            .first() // Select the first matching element
            .click(); // Click the element
        // Verify 'terminal id'
        cy.get('.flex__between.mb-2')
            .contains('terminal id')
           

        // Verify 'serial number'
        cy.get('.flex__between.mb-2')
            .contains('serial number')
            

        // Verify 'terminal type'
        cy.get('.flex__between.mb-2')
            .contains('terminal type')
            

        // Verify 'Status'
        cy.get('.flex__between.mb-2')
            .contains('Status')
           

        // Verify 'terminal owner'
        cy.get('.flex__between.mb-2')
            .contains('terminal owner')
            

        // Verify 'Institution'
        cy.get('.flex__between.mb-2').contains('Institution')

        // Verify 'Sub-Institution'
        cy.get('.flex__between.mb-2')
            .contains('Sub-Institution')

        // Verify 'terminal manager'
        cy.get('.flex__between.mb-2').contains('terminal manager')
            

        // Verify 'maker date'
        cy.get('.flex__between.mb-2').contains('maker date')
            
        // Verify 'date of creation'
        cy.get('.flex__between.mb-2').contains('date of creation')

        // Verify 'merchant name'
        cy.get('.flex__between.mb-2').contains('merchant name')

        // Verify 'merchant phone number'
        cy.get('.flex__between.mb-2').contains('merchant phone number')
      
        // Verify 'merchant type'
        cy.get('.flex__between.mb-2').contains('merchant type')
       
        // Verify 'transaction timeout'
        cy.get('.flex__between.mb-2')
        .contains('transaction timeout')
       
    }

    deactivateTerminal(){
        cy.get('.table__wrapper.px-2')
        .find('.text-center.pill--success.undefined')
        .contains('Active')
        .first()
        .click()
        
    }

 
}