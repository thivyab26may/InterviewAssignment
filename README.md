# Interview Assignment

This project contains Playwright end-to-end tests for validating application details and my applications behavior.

## Structure

- `tests/` - Playwright test specs
- `pages/` - Page Object Model classes
- `test-data/` - JSON test data for users and permits
- `playwright.config.ts` - Playwright configuration

## Assumptions
Test URL: https://www.test
Test data is retrieved from json file
Test data for users in 1 json file
Test data for application details in 2nd json file.



## Run tests

Run the test suite:


npx playwright test


Generate and open the HTML report:

```bash
npx playwright show-report
```
