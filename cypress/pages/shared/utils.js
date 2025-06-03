
export class Utility{
    getRandomNumber(){
        return Math.floor(Math.random() * 10000);
    }

    getTodaysDate(){
        const today = new Date();
        const yyyy = today.getFullYear()
        let mm = today.getMonth() + 1
        let dd = today.getDate()

        if(dd<10) dd = '0' + dd
        if(mm<10) mm = '0' + mm

        const formattedDate = yyyy + '-' + mm + '-' + dd
        return formattedDate
    }

    uploadFile(){
        const documentPath = 'image.png'
        cy.get('input[type=file]').invoke('show').attachFile(documentPath)
    }

    uploadDocument(name_of_doc){
        const documentPath = 'image.png'
        cy.get(`#${name_of_doc}`).invoke('show').attachFile(documentPath)
        cy.wait(500)
    }

    getLinkFromEmail(emailId){
        cy.mailosaurGetMessage("ujkaarza", {
            sentTo:emailId+"@ujkaarza.mailosaur.net"
        }, {
            timeout: 60000
        }).then((email) => {
            expect(email.subject).to.equal("INVITE")
            var inviteLink = email.html.links[1].href
            Cypress.env('inviteLink', inviteLink);
        });
    }

    visitInviteLink(){
        const inviteLink = Cypress.env('inviteLink');
        if (inviteLink) {
            cy.visit(inviteLink);
        } else {
            throw new Error('Invite link was not sent.');
        }
    }

    search(searchTerm){
        cy.get('#searchQuery').type(searchTerm + '{enter}')
        cy.wait(500)
    }

    filterByAnyDate(){
        const startDate = "Choose Thursday, May 1st, 2025";
        const targetDateAriaLabel = "Choose Thursday, May 29th, 2025";
        cy.get('#dateFilterDropdown').contains('Any Date').click()
        cy.get('.date-filter-wrapper label').contains('Today').click()
        cy.contains('button', 'Apply').click()
        cy.contains('h3', 'No').should('exist');
        cy.get('#dateFilterDropdown').contains('Any Date').click()
        cy.get('.date-filter-wrapper label').contains('This Week').click()
        cy.contains('button', 'Apply').click()
        cy.get('#dateFilterDropdown').contains('Any Date').click()
        cy.get('.custom-date-picker button').contains('Choose Date').click()
        cy.reload()
        // cy.get(`[aria-label="${startDate}"]`).click({multiple:true});
        // cy.get(`[aria-label="${targetDateAriaLabel}"]`).click({multiple:true});
        //cy.get('.custom__date .flex__center.mb-4').click()
        //cy.contains('button', 'Apply').click()
    }

    exportCSV(){
        cy.get('button span').contains('Export CSV').click()
        cy.contains('Download Report').should('exist');
        cy.get('button').contains('Download').click()
        cy.get('.Toastify__toast-body').should('exist')
    }

    
}