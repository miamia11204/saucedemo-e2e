# Test Scenarios

These are the five automated cases currently in the repo. The table describes the assertions in the code; it is not a separate manual test report.

| ID | Scenario | Steps / data | Expected checks | Spec |
|---|---|---|---|---|
| SD-LOGIN-001 | Valid login | Open SauceDemo; log in as standard_user with secret_sauce | URL includes /inventory.html | loginSuccess.cy.js |
| SD-LOGIN-002 | Invalid password | Open SauceDemo; use standard_user with wrong_password | Error is visible and contains Epic sadface | loginFail.cy.js |
| SD-CART-001 | Add and remove one product | Log in; add Sauce Labs Backpack; remove it | Cart badge shows 1; Remove button appears; cart badge becomes empty after removal | loginSuccess.cy.js |
| SD-CHECKOUT-001 | Checkout three products | Log in; add Backpack, Bike Light and Bolt T-Shirt; check cart; enter John / Doe / 12345; Continue and Finish | Cart contains the three expected names; URL reaches checkout-step-one.html and checkout-complete.html | loginSuccess.cy.js |
| SD-LOGOUT-001 | Logout | Log in; open the menu; select Logout | URL returns to https://www.saucedemo.com/ | logout.cy.js |

The successful checkout case also clicks generate-pdf-order. There is no assertion for the downloaded file, so PDF verification is not counted as covered.

Login runs in beforeEach for the positive tests. Each spec uses LoginPage; the checkout test uses CheckoutPage to fill the three fields.
