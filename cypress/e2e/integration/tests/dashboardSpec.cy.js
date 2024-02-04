import DashboardPage from '../pages/dashboardPage';
import LoginPage from '../pages/loginPage';

import user from '../../../fixtures/user.json';

describe('Dashboard Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('user').then((users) => {
            const user = users.users[0];
          cy.get(LoginPage.inpUsername).type(user.username);
          cy.get(LoginPage.inpPassword).type(user.password);
          cy.get(LoginPage.btnLogin).click();
          });
      });

    it('Validate number of items on Page', () => {
        // assertions
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        DashboardPage.countInventoryItems();
    });

    it('Validate number of lowest and highest Prices on Page', () => {
        // assertions
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(DashboardPage.drpSort).should('exist');
        cy.get(DashboardPage.drpSort).contains('Name (A to Z)');

        // actions
        cy.get(DashboardPage.drpSort).select('Price (low to high)');

        // assertions
        cy.get(DashboardPage.drpSort).contains('Price (low to high)');

        // actions
        DashboardPage.verifyFirstAndLastItemValues();
    });
});
