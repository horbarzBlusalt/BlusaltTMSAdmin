import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { merchantPaymentPage } from "../../pages/index";

merchantPage = new merchantPaymentPage()

When('users navigate into merchant payment dashboard', () => {
    merchantPage.verifyDashboardTopLevelStatistics()
    merchantPage.verifyOrganizationStats()
    merchantPage.filterByDate()
    merchantPage.verifyDashboardValues()
    merchantPage.verifyRegionalAnalysis()
    merchantPage.merchantStatus()

})

When('users navigate into the transactions page', () => {
    merchantPage.verifyTransactionsPage()
})

When('users navigate into the terminals page', () => {
    merchantPage.verifyTerminalsPage()
    merchantPage.exportTerminalsCSV()
    merchantPage.searchTerminals()
    merchantPage.filterTerminalsByAnyDate()
})

Then('verify terminal information', ()=> {
    merchantPage.viewTerminalInformation()
})

