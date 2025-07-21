import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://128.1.103.4/ver73_hico_ndb/');
  await page.getByPlaceholder('Enter Distributor Id').click();
  await page.getByPlaceholder('Enter Distributor Id').fill('000001');
  await page.getByPlaceholder('Enter Distributor Id').press('Tab');
  await page.getByPlaceholder('Enter User Id').fill('admin');
  await page.getByPlaceholder('Enter User Id').press('Tab');
  await page.getByPlaceholder('Enter User Password').fill('admin');
  await page.getByRole('button', { name: 'Sign-In' }).click();
});