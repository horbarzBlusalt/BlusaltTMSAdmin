import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { RevenuePage } from "../../pages/merchant_payment/revenuePage";

const revenuePage = new RevenuePage();

When('users navigate to the revenue page', () => {
    // Navigate to the revenue page
    revenuePage.visitRevenuePage()
});

Then('all static elements should be visible', () => {
    revenuePage.verifyStaticElements();
});

Then('all dynamic values should be valid numbers', () => {
    revenuePage.verifyDynamicValues();
}); 

When('users navigate to the commission page', () => {
    revenuePage.visitCommissionPage()
});

Then('all static elements should be visible on commission page', () => {
    revenuePage.verifyStaticElementsOnCommissionPage();
});

Then('all dynamic values should be valid numbers on commission page', () => {
    revenuePage.verifyDynamicValuesOnCommissionPage();
});

When('users navigate to the commissions report page', () => {
    revenuePage.visitCommissionsReportPage()
});

Then('all static elements should be visible on commissions report page', () => {
    revenuePage.verifyStaticElementsOnCommissionsReportPage();
});

Then('all dynamic values should be valid numbers on commissions report page', () => {
    revenuePage.verifyDynamicValuesOnCommissionsReportPage();
});