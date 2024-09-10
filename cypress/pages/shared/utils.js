
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
        cy.mailosaurGetMessage("vph0lgs0", {
            sentTo:emailId+"@vph0lgs0.mailosaur.net"
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
            throw new Error('Invite link is not set.');
        }
    }
}