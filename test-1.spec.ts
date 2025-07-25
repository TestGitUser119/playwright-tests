import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
});

test('testLogin', async ({ page }) => {
  await page.goto('https://52.116.35.90:441/Default.aspx');
  await page.getByPlaceholder('Enter Distributor Id').click();
  await page.getByPlaceholder('Enter Distributor Id').fill('98681001');
  await page.getByPlaceholder('Enter User Id').click();
  await page.getByPlaceholder('Enter User Id').fill('admin');
  await page.getByPlaceholder('Enter User Password').click();
  await page.getByPlaceholder('Enter User Password').fill('admin');
  await page.getByRole('button', { name: 'Sign-In' }).click();
  await page.locator('a').filter({ hasText: 'Main Menu' }).click();
  await page.getByRole('link', { name: 'Transactions' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Back');
  await page.getByText('Transactions,Cash Memo,Back Office Transactions Cash memo Back office').click();
  await page.getByRole('button', { name: 'Cashmemo' }).click();
  await page.goto('https://52.116.35.90:441/transaction/presentation/TRN_CMO_CashMemo_VAN_EF.aspx?_QSP_=olu453tEQeDPL9JjmINbdy1a50N%2bXNVdzCuMYKbR3uEG2kG09w%2bYliReSbU%2fhcL9jmwoQEdZMLlPSAaYTLmIZVqmZ2Vm4ytJqlF9wp%2fN3teTzPGsL43mCYnITpbK3WO02TBCkOMHEZTxnj7p3T0pqAA5k5ukXC2sBWzo64smIpxRnKTLv9devtv1NveKPsWYSQQL9F4It1cnGE6E3GXBQoK5plyR1yNfLXZHS9mD7dY%3d');
  await page.locator('#ctl00_cphMainContent_detailGrid_ctl5001_txtCode').click();
  await page.locator('#ctl00_cphMainContent_detailGrid_ctl5001_txtQOQTY3').click();
  await page.locator('#ctl00_cphMainContent_detailGrid_ctl5001_txtQOQTY3').click();
  await page.locator('#ctl00_cphMainContent_detailGrid_ctl5001_txtQOQTY3').fill('10');
  await page.getByRole('button', { name: 'Insert' }).click();
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.goto('https://52.116.35.90:441/Transaction/Presentation/TRN_CMO_CashmemoView_EF.aspx?fm=View&subDistributor=&cashmemo=25DFE1000190&_QSP_=8b%2be0cwpe8aUDOY2GgzKDgwGnO446Bil38OMpqHhPFOo31MeCIzzWf%2bQAB6QtwQCBXjK7FfHo4WtNb441dcm0KzTpCNgCpui962dDXekER2p7XTwoTfh8tL7NIuCdhDtKAqDnJ%2fBQtuxd3fAVK7iMAEVfTDBJaVNQsirnEVkv5IpECsQFUk%2bzWUNi5lKB%2bSYvmUaLUje2K0DaLf%2fZKZ39vhH957z4tqIVNeV7B0HFumKXTE1MCXdgleCkYLqQdtrCCT%2b7Q6A3bI2gl%2btaARIjL3DYK6bcdb%2b63asjK5C9in2ZW6o46JcByPFCygZ339eCtBrpJ0%2f4mIX9v8N5CdKylwQSj9M%2fw2Z9n%2fbbmW3xFo%3d');
});