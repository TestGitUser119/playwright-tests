import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://google.com/');
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('wikipedia ');
  await page.getByLabel('Search', { exact: true }).press('ArrowDown');
  await page.getByLabel('Search', { exact: true }).press('ArrowDown');
  await page.getByRole('link', { name: 'Pakistan Wikipedia https://en.wikipedia.org › wiki › Pakistan' }).click();
});