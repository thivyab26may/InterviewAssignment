# Interview Assignment

This project contains Playwright end-to-end tests for validating application details and my applications behavior.

## Structure

- `tests/` - Playwright test specs
- `pages/` - Page Object Model classes
- `test-data/` - JSON test data for users and permits
- `playwright.config.ts` - Playwright configuration

## Assumptions
1. Test URL: https://www.testURL.com
   
2. Business Rule Assumption for Validation:  
**To validate the test case “Applications belonging to the logged‑in user are displayed correctly”, the following ownership mapping is assumed:**

User1 owns only Electrical Permit and Plumbing Permit applications.
User2 owns only Building Permit applications.
User3 owns only Gas Permit applications.

3. I have added the locators in all the pages based on my assumption.

## Test Data 

1. Test data for users is under json file ( users_application.json )
2. The applications owned by the user are mentioned in the json file ( users_permits.json )

3. I have added the locators in all the pages based on my assumption.

## Test Data 

1. Test data for users is under json file ( users_application.json )
2. The applications owned by the user are mentioned in the json file ( users_permits.json )


## Run tests

**Run the test suite:**

npx playwright test

## Generate and open the HTML report:

npx playwright show-report

