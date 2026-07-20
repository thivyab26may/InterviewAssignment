import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';
import { MyApplicationsPage } from '../pages/myApplications.page.js';
import { LogOutPage } from '../pages/logout.page.js';
import testData from '../test-data/users_applications.json';
import  permitData  from '../test-data/users_permits.json';


// Test to validate that User1 should only have Electrical or Plumbing Permit applications displayed on the MyApplications page.
test('Validate User1 should only have Electrical or Plumbing Permit applications', async ({ page }) => {

  // Create instances of the page objects for login, my applications, and logout
  const loginPage = new LoginPage(page);
  const myAppsPage = new MyApplicationsPage(page);
  const logOutPage = new LogOutPage(page);

// Parsing the test data and permit data to pass the user credentials and allowed permit types for validation
 const test = JSON.parse(JSON.stringify(testData));
 const permit = JSON.parse(JSON.stringify(permitData));

 // Get the first user from the test data to use for login and validation
 const user = test.users[0];

 // Navigate to the login page and log in with the first user's credentials from the test data
  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  // Navigate to the MyApplications page and get all application rows for validation
  await myAppsPage.navigate();

  // Get all application rows from the MyApplications page
  const rows = await myAppsPage.getApplications();

  // Get the allowed permit types for the first user from the permit test data
  const allowedPermits = permit.users[0].allowedPermitTypes;

  // Loop through each application row and validate that the permit type is either Electrical or Plumbing
  for (let i = 0; i <= rows.length - 1; i++) {
    const permitType = await rows[i].locator('.permit-type').textContent();
    expect(allowedPermits).toContain(permitType);
  }

  // Log out after validation
  await logOutPage.logout();
});
