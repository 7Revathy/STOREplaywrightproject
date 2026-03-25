const { test, expect } = require('@playwright/test');
const dataset=require('../utils/creditionaldata.json')


test('login with valid credentials', async ({ page }) => {

  
  // Verify page title
await expect(page).toHaveTitle("STORE");
await page.pause();
 // Click login button to open modal
  await page.locator('#login2').click();
await expect(page.locator('#logInModalLabel')).toHaveText('Log in');
await page.pause();
await page.locator('#loginusername').fill(dataset.username);
await page.pause();
await page.locator('#loginpassword').fill(dataset.password);
await page.pause();
await page.locator('//button[text()="Log in"]').click();
//await expect(page.getByRole('link', { name: 'Samsung galaxy s6' })).toBeVisible();// after signup print anyof the product

});

test('login with invalid username and valid password', async ({ page }) => {

  
  // Verify page title
await expect(page).toHaveTitle("STORE");
await page.pause();
 // Click login button to open modal
  await page.locator('#login2').click();
await expect(page.locator('#logInModalLabel')).toHaveText('Log in');
await page.pause();
await page.locator('#loginusername').fill("Invalidusername");
await page.pause();
await page.locator('#loginpassword').fill(dataset.password);
await page.pause();

// To handle the LoginPage box
page.on('dialog', async dialog => {
  expect(dialog.message()).toContain('User does not exist.');
  await dialog.accept();// for click the ok button on diaglog box
});
await page.locator('//button[text()="Log in"]').click();

});

test.only('login with valid username and invalid password', async ({ page }) => {

  
  // Verify page title
await expect(page).toHaveTitle("STORE");
await page.pause();
 // Click login button to open modal
  await page.locator('#login2').click();
await expect(page.locator('#logInModalLabel')).toHaveText('Log in');
await page.pause();
await page.locator('#loginusername').fill(dataset.username);
await page.pause();
await page.locator('#loginpassword').fill("invalidpassword");
await page.pause();

// To handle the LoginPage box
page.on('dialog', async dialog => {
  expect(dialog.message()).toContain('Wrong password.');
  await dialog.accept();// for click the ok button on diaglog box
});
await page.locator('//button[text()="Log in"]').click();

});

test.only('login with invalid username and invalid password', async ({ page }) => {

  
  // Verify page title
await expect(page).toHaveTitle("STORE");
await page.pause();
 // Click login button to open modal
  await page.locator('#login2').click();
await expect(page.locator('#logInModalLabel')).toHaveText('Log in');
await page.pause();
await page.locator('#loginusername').fill("invalidusername");
await page.pause();
await page.locator('#loginpassword').fill("invalidpassword");
await page.pause();

// To handle the LoginPage box
page.on('dialog', async dialog => {
  expect(dialog.message()).toContain('User does not exist.');
  await dialog.accept();// for click the ok button on diaglog box
});
await page.locator('//button[text()="Log in"]').click();

});
