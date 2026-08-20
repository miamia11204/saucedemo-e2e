describe('Intentional Fail Test', () => {
  it('This should fail because this element does not exist', () => {
    cy.visit('https://www.saucedemo.com/');
    
    // Intentionally trying to type into a non-existent element to cause a failure
    cy.get('#never-exist').type(username);
  });
});