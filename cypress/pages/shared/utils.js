
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
        const documentPath = 'BLUSALT.pdf'
        cy.get(`#${name_of_doc}`).invoke('show').attachFile(documentPath)
        cy.wait(500)
    }

    getLinkFromEmail(emailId){
        cy.mailosaurGetMessage(Cypress.env('SERVER_ID'), {
            sentTo:emailId+Cypress.env('EMAIL_DOMAIN')
        }, {
            timeout: 60000
        }).then((email) => {
            expect(email.subject).to.equal("INVITE")
            var inviteLink = email.html.links[1].href
            cy.log(inviteLink)
            Cypress.env('inviteLink', inviteLink);
        });
    }

    visitInviteLink(){
        const inviteLink = Cypress.env('inviteLink');
        if (inviteLink) {
            cy.visit(inviteLink);
        } else {
            throw new Error('Invite link was not saved.');
        }
    }

    selectDropdown(dropdown_of_placeholder, value){
        let parentId;
        cy.contains(dropdown_of_placeholder).invoke('attr', 'id').then((id) => {
            parentId = id.replace('placeholder', '')
            cy.get(`#${id}`).click({force: true})
            cy.get(`#${parentId}option-${value}`).click({force: true})    
        }); 
    }
}