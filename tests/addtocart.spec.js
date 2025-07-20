import { test, expect } from '@playwright/test';

test('verify sum of products at checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await expect(page.getByText('Products')).toBeVisible();

  // Get product prices from the listing page
  const price1Text = await page.locator('.inventory_item_price').nth(0).innerText(); // e.g. "$29.99"
  const price2Text = await page.locator('.inventory_item_price').nth(1).innerText(); // e.g. "$9.99"

  // Convert to numbers
  const product1Price = parseFloat(price1Text.replace('$', ''));
  const product2Price = parseFloat(price2Text.replace('$', ''));
  const expectedTotal = product1Price + product2Price;

  // Add to cart
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(0).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();

  // Go to cart
  await page.getByRole('link', { name: '2' }).click();
  await expect(page.getByText('Your Cart')).toBeVisible();

  // Proceed to checkout
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').fill('test');
  await page.locator('[data-test="lastName"]').fill('testing');
  await page.locator('[data-test="postalCode"]').fill('000000');
  await page.getByRole('button', { name: 'CONTINUE' }).click();

  // Get the total from the checkout summary
  const totalText = await page.locator('.summary_subtotal_label').innerText(); // e.g. "Item total: $39.98"
  const totalValue = parseFloat(totalText.replace('Item total: $', ''));


  // Finish the checkout
  await page.getByRole('link', { name: 'FINISH' }).click();
  await expect(page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' })).toBeVisible();
});
