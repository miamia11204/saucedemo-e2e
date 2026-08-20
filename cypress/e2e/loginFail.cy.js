import loginPage from '../pages/LoginPage';

describe('SauceDemo Negative Login Automation', () => {
  beforeEach(() => {
    loginPage.visitPage();
  });

  it('This should fail to login with invalid credentials', () => {
    // Attempt to login with invalid credentials
    loginPage.login('standard_user', 'wrong_password');
    // Check "Epic sadface" error message is displayed
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface');;
  });

});