import { Page } from '@playwright/test';
export class LogOutPage {
  constructor(page) {
    this.page = page;
    this.userMenu = ".userMenu_locator";
    this.logoutButton = ".logoutButton_locator";
  }

  async logout() {
    await this.page.click(this.userMenu);
    await this.page.click(this.logoutButton);
  }
}