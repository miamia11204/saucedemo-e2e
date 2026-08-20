import loginPage from '../pages/LoginPage';

describe('SauceDemo Logout Automation', () => {
  beforeEach(() => {
    loginPage.visitPage();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('This should logout the user successfully', () => {
    // Click on the menu button to open the sidebar
    cy.get('#react-burger-menu-btn').click();
    // Click on the logout link in the sidebar
    cy.get('#logout_sidebar_link').click();
    // Verify that the user is redirected to the login page after logout
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});