# SauceDemo E2E Tests

This is a small Cypress project for practising web test automation on [SauceDemo](https://www.saucedemo.com/), a demo shopping site from Sauce Labs.

The tests cover login, adding/removing products, checkout and logout. I use JavaScript and two small page helpers for the login form and checkout details.

## Test coverage

There are **5 tests across 3 spec files**:

| Flow | Checks in the code |
|---|---|
| Valid login | The user reaches inventory |
| Invalid password | A visible error contains Epic sadface |
| Add/remove one product | Cart count becomes 1, Remove appears, then the cart becomes empty |
| Checkout three products | The correct products are in the cart; checkout reaches the completion page |
| Logout | The user returns to the login URL |

[Scenario notes](docs/test-cases.md) list the data and checks for each test.

## Run locally

Use Node.js 24 and npm. From the project folder:

```powershell
npm ci
npx cypress install
npm test
```

For the interactive Cypress runner:

```powershell
npm run test:open
```

To run the same tests in Chrome:

```powershell
npm run test:chrome
```

The tests use SauceDemo's public demo account, standard_user / secret_sauce. The checkout details are sample data. No personal account or real payment is needed.

## Project files

```text
cypress/
  e2e/          Login, cart/checkout and logout specs
  pages/        LoginPage and CheckoutPage helpers
  support/      Cypress support files
docs/           Test scenarios and notes
.github/        GitHub Actions workflow
```

The default example fixture is still present but is not used by these tests.

## GitHub Actions

The workflow runs the tests in Chrome on pushes and pull requests. It can also be started manually from [Actions](https://github.com/miamia11204/saucedemo-e2e/actions).

Screenshots from failed tests and run videos are saved as the saucedemo-test-artifacts download for seven days. Local node_modules, screenshots, videos and downloads are ignored by Git.

[Run notes](docs/test-notes.md) distinguish earlier CI results from checks of the current version.

## What I would add next

The checkout test clicks the PDF button, but it does not yet check that the file exists or that its contents are correct. Other useful cases would be missing checkout fields, a locked-out user, product sorting and order totals.
