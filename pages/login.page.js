import { Page } from '@playwright/test';
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = ".username_locator";
    this.passwordInput = ".password_locator";
    this.loginButton = ".loginButton_locator";
  }

  async goto() {
    await this.page.goto("https://testURL.com");
  }

  async login(username , password ) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}