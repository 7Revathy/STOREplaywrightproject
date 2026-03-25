const { test, expect } = require('@playwright/test');
const dataset=require('../utils/creditionaldata.json')

test.beforeEach(async({page})=>{
await page.goto('https://demoblaze.com/');

})


test('Select a product from the mainpage and  Add to Cart then Click "ok" on the popup', async ({ page }) => {

  
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
await page.pause();
await expect(
  page.locator('#cat', { hasText: 'CATEGORIES' })
).toBeVisible();

// Select the Product
await page.locator("//a[@href='prod.html?idp_=3' and @class='hrefch']").click();
await page.pause();
// display the product discription
const details = await page.locator("div[id='more-information'] p").textContent();
console.log("Product description is",details);
await page.pause();

//Click add to cart
page.on('dialog2', async dialog2 => {
  expect(dialog2.message()).toContain('Product added.');
  await dialog2.accept();// for click the ok button on diaglog box
});
await page.pause();
await page.locator('a.btn.btn-success.btn-lg').click()
});
