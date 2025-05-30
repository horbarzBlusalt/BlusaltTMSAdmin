import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { merchantPaymentPage } from "../../pages/index";

merchantPage = new merchantPaymentPage()

When('users navigate into merchant payment dashboard', () => {
    merchantPage.verifyDashboardTopLevelStatistics()
    merchantPage.verifyOrganizationStats()
})

Then('we are done', ()=> {

})

