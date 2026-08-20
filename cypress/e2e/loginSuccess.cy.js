import loginPage from '../pages/LoginPage';
import checkoutPage from '../pages/CheckoutPage';

describe('SauceDemo Login Automation', () => {
  beforeEach(() => {
    loginPage.visitPage();
    loginPage.login('standard_user', 'secret_sauce');
  });

  it('This should login successfully with standard user', () => {
    // Check if the URL contains '/inventory.html' to verify successful login
    cy.url().should('include', '/inventory.html');
  });


  it('Add 1 item to the cart and verify the cart count', () => {
    // Add the first item to the cart
    cy.get('#add-to-cart-sauce-labs-backpack').click();

    // Check if the cart badge shows '1' indicating one item in the cart
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '1');

    // Check if the 'Add to Cart' button is now 'Remove' 
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    // Check if 'Remove' button can be clicked to remove the item from the cart and 
    // verify the cart count goes back to '0'
    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('[data-test="shopping-cart-link"]').should('be.empty');
  });

  it('Add multiple items to the cart and checkout', () => {
    // Add multiple items to the cart
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    // Go to checkout page and verify the correct items are present in the cart
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs BackpackSauce Labs Bike LightSauce Labs Bolt T-Shirt');
    // Proceed to checkout and verify the checkout page is displayed
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout-step-one.html');
    // Fill in checkout information, continue to the next steps, and complete the checkout process
    checkoutPage.fillInfo('John', 'Doe', '12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.url().should('include', '/checkout-complete.html');
    // Save purchase confirmation pdf
    cy.get('#generate-pdf-order').click();
  });
});