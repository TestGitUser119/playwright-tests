import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/');
  await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/?__cf_chl_rt_tk=xW.b66PbgF1PgkamBbvm.HSuzKU48YfiAQEGf_SHy2c-1752999532-1.0.1.1-VWMRvWqUIbloBcmWYOabNUIKYHakxSTDtfMZ7o70uaQ');
  await page.goto('https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/');
  await expect(page.getByRole('heading', { name: 'file-examples.com' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sample .pdf download' })).toBeVisible();
  await expect(page.locator('tbody')).toContainText('150 kB');
  await expect(page.locator('tbody')).toContainText('pdf');
  await expect(page.getByRole('row', { name: '150 kB pdf Download sample' }).getByRole('link')).toBeVisible();
  await page.getByRole('row', { name: '150 kB pdf Download sample' }).getByRole('link').click();
  await page.goto('https://file-examples.com/wp-content/storage/2017/10/file-sample_150kB.pdf');
  await expect(page.getByRole('heading')).toContainText('Downloading...');
  await page.getByRole('link', { name: '[Go Back]' }).click();
});