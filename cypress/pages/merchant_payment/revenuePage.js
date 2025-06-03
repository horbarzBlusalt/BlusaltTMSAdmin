///<reference types="cypress"/>

export class RevenuePage {
    elements = {
        // Date selector elements
        dateSelector: () => cy.get('#date-select-label'),
        dateSelectorButton: () => cy.get('.select-button'),
        
        // Currency selector
        currencySelector: () => cy.contains('(NGN) Naira'),
        
        // Statistics card
        card1: () => cy.get('.section--stat-display.h-100 > :nth-child(1)').eq(0),
        card2: () => cy.get('.section--stat-display.h-100 > :nth-child(1)').eq(1) ,
        card3: () => cy.get('.section--stat-display.h-100  > :nth-child(1)').eq(2),
        card4: () => cy.get('.section--stat-display.h-100  > :nth-child(1)').eq(3),
        card5: () => cy.get('.section--stat-display.h-100  > :nth-child(1)').eq(4),
        card6: () => cy.get('.section--stat-display.h-100  > :nth-child(1)').eq(5),
        
        // Card Transactions section
        cardTransactionsTitle: () => cy.contains('CARD TRANSACTIONS'),
        transactionValue: () => cy.get('.fw-bold.ms-4').eq(0),
        revenueValue: () => cy.get('.fw-bold.ms-4').eq(1),
        
        // Card Scheme section
        cardSchemeTitle: () => cy.contains('CARD SCHEME'),
        mastercardValue: () => cy.get('.fw-bold.ms-4').eq(2),
        visaValue: () => cy.get('.fw-bold.ms-4').eq(3),
        verveValue: () => cy.get('.fw-bold.ms-4').eq(4),
        
    }


    visitRevenuePage(){
        cy.contains('Financials').click()
        cy.url().should('include', '/financials/revenue')
    }

    verifyStaticElements() {
        // Verify date selector exists
        this.elements.dateSelector().should('exist');
        this.elements.dateSelectorButton().should('contain.text', 'Today');
        
        // Verify currency selector
        this.elements.currencySelector().should('exist');
        
        // Verify section titles
        cy.contains('blusalt total revenue').should('exist');
        cy.contains('total transaction value').should('exist');
        cy.contains('total transaction volume').should('exist');
        this.elements.cardTransactionsTitle().should('exist');
        this.elements.cardSchemeTitle().should('exist');
    }

    verifyRevenueStatisticsValues(element){
        element.find('.value-text') // Find the element containing the value text
            .should('exist') // Assert that the value element exists
            .invoke('text') // Get the text content of the element
            .then((text) => {
                const rawValue = text.trim(); // Get the raw text and trim whitespace
                const numericText = rawValue.replace('₦', '').trim(); // Remove the Naira symbol and trim again
                const numericValue = parseFloat(numericText); // Convert the cleaned text to a number
                expect(numericValue).to.not.be.NaN;
                expect(numericValue).to.be.gte(0);
            });
    }

    verifyCardTransactionsValues(element){
        element.should('exist') // Assert that the value element exists
            .invoke('text') // Get the text content of the element
            .then((text) => {
                const rawValue = text.trim(); // Get the raw text and trim whitespace
                const numericText = rawValue.replace('₦', '').trim(); // Remove the Naira symbol and trim again
                const numericValue = parseFloat(numericText); // Convert the cleaned text to a number
                expect(numericValue).to.not.be.NaN;
                expect(numericValue).to.be.gte(0);
            });
    }


    verifyDynamicValues() {
        // Verify revenue statistics values are numbers >= 0
        this.verifyRevenueStatisticsValues(this.elements.card1())
        this.verifyRevenueStatisticsValues(this.elements.card2())
        this.verifyRevenueStatisticsValues(this.elements.card3())
        this.verifyCardTransactionsValues(this.elements.transactionValue())
        this.verifyCardTransactionsValues(this.elements.revenueValue())
        this.verifyCardTransactionsValues(this.elements.mastercardValue())
        this.verifyCardTransactionsValues(this.elements.visaValue())
        this.verifyCardTransactionsValues(this.elements.verveValue())
    }

    visitCommissionPage(){
        cy.contains('Commission').click()
        cy.url().should('include', '/financials/commission')
    }

    verifyStaticElementsOnCommissionPage(){
        cy.contains('total commission value').should('exist')
        cy.contains('platform commission').should('exist')
        cy.contains('processor commission').should('exist')
        cy.contains('institution commission').should('exist')
        cy.contains('Sub-Institution commission').should('exist')
    }

    verifyDynamicValuesOnCommissionPage(){
        this.verifyRevenueStatisticsValues(this.elements.card1())
        this.verifyRevenueStatisticsValues(this.elements.card2())
        this.verifyRevenueStatisticsValues(this.elements.card3())
        this.verifyRevenueStatisticsValues(this.elements.card4())
        this.verifyRevenueStatisticsValues(this.elements.card5())
    }

    visitCommissionsReportPage(){
        cy.contains('Commission report').click()
        cy.url().should('include', '/financials/commission-report')
    }

    verifyStaticElementsOnCommissionsReportPage(){
        cy.contains('no of institutions').should('exist')
        cy.contains('commission value').should('exist')
        cy.contains('successful transaction value').should('exist')
        cy.contains('successful transaction volume').should('exist')
        cy.contains('Failed transaction value').should('exist')
        cy.contains('failed transaction volume').should('exist')
    }

    verifyDynamicValuesOnCommissionsReportPage(){
        this.verifyRevenueStatisticsValues(this.elements.card1())
        this.verifyRevenueStatisticsValues(this.elements.card2())
        this.verifyRevenueStatisticsValues(this.elements.card3())
        this.verifyRevenueStatisticsValues(this.elements.card4())
        this.verifyRevenueStatisticsValues(this.elements.card5())
        this.verifyRevenueStatisticsValues(this.elements.card6())
    }
} 