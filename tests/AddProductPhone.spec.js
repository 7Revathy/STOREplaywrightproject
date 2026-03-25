const { test, expect } = require('@playwright/test');
const dataset=require('../utils/creditionaldata.json')

/*test.beforeEach(async({page})=>{
await page.goto('https://demoblaze.com/');
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

})*/


test(' Select a product under Phones and  Add to Cart Add details then Purchase', async ({ page }) => {


// Select the categories phone
await page.locator("//a[text()='Phones']").click();
await page.pause();

await page.locator("//a[@href='prod.html?idp_=5' and @class='hrefch']").click();
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

await page.locator('#cartur').click()
// Click place order button
await page.locator('button.btn.btn-success').click()

await expect(await page.locator('#orderModalLabel')).toHaveText('Place order');
await page.pause();
await page.locator('#totalm').fill('Revathy');
await page.pause();
await page.locator('#country').fill('India');
await page.pause();
await page.locator('#city').fill('Kerala');
await page.pause();
await page.locator('#card').fill('4242 4242 4242 4242');
await page.pause();
await page.locator('#month').fill('March');
await page.pause();
await page.locator('#year').fill('2026');
await page.pause();


await page.getByText('Purchase').click();

// Verify success message
await expect(
  page.getByText('Thank you for your purchase!')
).toBeVisible();

// Click OK button
await page.getByRole('button', { name: 'OK' }).click();

});
