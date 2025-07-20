import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const screenshotDir = 'screenshots';
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

test('file upload test with screenshots and reporting', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.screenshot({ path: `${screenshotDir}/01-landing-page.png`, fullPage: true });

  await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/02-heading-visible.png`, fullPage: true });

  await expect(page.locator('#file-upload')).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/03-input-visible.png`, fullPage: true });

  await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();
  await page.screenshot({ path: `${screenshotDir}/04-button-visible.png`, fullPage: true });

  const filePath = path.resolve('D:/Test Automation/PlaywrightProject/Project/test-data/Needtobeupload.txt');
  await page.waitForTimeout(1000); // optional wait
  await page.locator('#file-upload').setInputFiles(filePath);
  await page.screenshot({ path: `${screenshotDir}/05-file-selected.png`, fullPage: true });

  await page.waitForTimeout(1000); // optional wait
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await page.screenshot({ path: `${screenshotDir}/06-upload-success.png`, fullPage: true });

  await expect(page.locator('#uploaded-files')).toHaveText('Needtobeupload.txt');
  await page.screenshot({ path: `${screenshotDir}/07-file-name-confirmed.png`, fullPage: true });
});
