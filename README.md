# Interview Assignment

This project contains Playwright end-to-end tests for validating application details and the applications belonging to logged in users.

## Structure

- `tests/` - Playwright test cases
- `pages/` - Page Object Model classes
- `test-data/` - JSON test data for users
- `playwright.config.ts` - Playwright configuration

## Assumptions
1. Test URL: https://www.testURL.com
   
2. Business Rule Assumption for Validation:  
**To validate the test case “Applications belonging to the logged‑in user are displayed correctly”, the following ownership mapping is assumed:**

   User1 owns only Electrical Permit or Plumbing Permit applications.

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

## Configuration: ##

**I have added the below Configurations in the "playwright.config.ts" file**

1. Playwright will run tests in parallel.

2. Each test has a maximum execution time of 1 minute.
If a test exceeds this, Playwright stops it and marks it as failed.

3. All the Assertions have a 10‑second timeout.
This allows Playwright to wait for UI elements to appear before failing.

4. HTML report is generated after each run.

5. If a test fails, Playwright will retry it up to 2 times.

6. Screenshots will be captured only when a test fails.

7. The test cases will run on below browsers / mobile devices for compatibility testing,

Google Chrome

Mozilla Firefox

Safari (WebKit)

Pixel 5 (Android Chrome)

iPhone 15 (iOS Safari)
   
## Run tests

**Run the test suite:**

npx playwright test

## Generate and open the HTML report:

npx playwright show-report

