import { expect } from '@playwright/test';

export class MyApplicationsPage {
  constructor(page) {
    this.page = page;
    this.myApplicationsLink = '#myApplicationsLink_locator';
    this.applicationGrid = '.applicationgrid_locator';
  }

  // Click on the MyApplications link to navigate to the MyApplications page and verify that the URL is correct.
  async navigate() {
    
    await this.page.click(this.myApplicationsLink);
    await expect(this.page).toHaveURL("/myapplications/");
  }

  // This function returns all application rows displayed on the grid.
  async getApplications() {
    return this.page.$$(this.applicationGrid);
  }

  // This function retrieves the details of a specific application row from the grid and returns an object containing the details.
  async getApplicationDetails(row) {
    return {
      status: await row.locator('.status').textContent(),
      referenceNumber: await row.locator('.referencenumber').textContent(),
      applicationNumber: await row.locator('.applicationnumber').textContent(),
      permitType: await row.locator('.permittype').textContent(),
      address: await row.locator('.address').textContent(),
      date: await row.locator('.date').textContent(),
      owner: await row.locator('.owner').textContent(),
      action: await row.locator('.action').textContent(),
  }
}
};
