const { test, expect } = require('@playwright/test');

test('Open saucedemo.com', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  // Wait for username field to be visible (explicit wait)
  await page.waitForSelector('input[data-test="username"]', { state: 'visible', timeout: 15000 });

  // Enter username
  await page.fill('input[data-test="username"]', 'standard_user');
  // Enter password
  await page.fill('input[data-test="password"]', 'secret_sauce');
  // Click the login button
  await page.click('input[data-test="login-button"]');
});
