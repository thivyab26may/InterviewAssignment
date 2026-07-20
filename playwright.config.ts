import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  reporter: 'html',
  retries: 2,
  use: {
    trace: 'on-first-retry',
  },

  /* Configure the test cases for different browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
     {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 15'] },
     },
  ],
});
