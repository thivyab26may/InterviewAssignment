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

## Test Cases

Test Case1 :
validateMyApplications.spec.ts -- This test validates that the My Applications page correctly displays application details for a logged‑in user.

The test ensures:

The user logs in with valid credentials

Navigates to My Applications

All displayed applications belong to the logged‑in user

Every application field matches the expected data from users_applications.json

The user is logged out after validation

Test Case 2:
validateApplicationDetails.spec.ts -- This test validates if Application details of the logged-in user (status, reference number, application number, permit type, address, date, owner and actions) match expected data. 

This test ensures:

The user logs in successfully

Navigates to My Applications

Every application displayed on the UI matches the expected values stored in your JSON file

The user logs out

## Run tests

**Run the test suite:**

npx playwright test

## Generate and open the HTML report:

npx playwright show-report

