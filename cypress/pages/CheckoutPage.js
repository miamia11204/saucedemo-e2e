class CheckoutPage {
    fillInfo(firstname, lastname, postalcode) {
        cy.get('#first-name').type(firstname);
        cy.get('#last-name').type(lastname);
        cy.get('#postal-code').type(postalcode);
    }
}
export default new CheckoutPage();