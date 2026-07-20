import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { MyApplicationsPage } from '../pages/myApplications.page.js';
import { LogOutPage } from '../pages/logout.page.js';
import testData from '../test-data/users_applications.json';

// Test to validate that the application details displayed on the MyApplications page match the expected data from the test data file.
test('Application details match expected data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const myApplicationsPage = new MyApplicationsPage(page);
  const logOutPage = new LogOutPage(page);
  
  // Navigate to the login page and log in with the second user's credentials from the test data
  await loginPage.goto();
  const test = JSON.parse(JSON.stringify(testData));
  await loginPage.login(test.users[1].username, test.users[1].password);

  await myApplicationsPage.navigate();

  // Get all application rows from the MyApplications page
  const rows = await myApplicationsPage.getApplications();

  // Loop through each application row and validate the details against the expected data
  for (let i = 0; i < rows.length; i++) {

    // Get the actual application details from the page
    const actualApplicationDetails = await myApplicationsPage.getApplicationDetails(rows[i]);

    // Get the expected application details from the test data
    const expectedApplicationDetails = test.users[1].applications[i];

   // Compare the actual application details with the expected application details and assert that they match
    expect(actualApplicationDetails.status).toBe(expectedApplicationDetails.status);
    expect(actualApplicationDetails.referenceNumber).toBe(expectedApplicationDetails.referenceNumber);
    expect(actualApplicationDetails.applicationNumber).toBe(expectedApplicationDetails.applicationNumber);
    expect(actualApplicationDetails.permitType).toBe(expectedApplicationDetails.permitType);
    expect(actualApplicationDetails.address).toBe(expectedApplicationDetails.address);
    expect(actualApplicationDetails.date).toBe(expectedApplicationDetails.date);
    expect(actualApplicationDetails.owner.trim()).toBe(expectedApplicationDetails.owner);
    expect(actualApplicationDetails.action).toBe(expectedApplicationDetails.action); 
  }
 
  // Log out after validation
  await logOutPage.logout();

});
