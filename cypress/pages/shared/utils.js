
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
        const documentPath = 'images.jpeg'
        cy.get('input[type=file]').invoke('show').attachFile(documentPath)
    }

    getEmailMessage(emailId){
        cy.mailosaurGetMessage("vph0lgs0", {
            sentTo:emailId+"@vph0lgs0.mailosaur.net"
        }, {
            timeout: 60000
        }).then((email) => {
            cy.log(email.subject)
        });
    }
}