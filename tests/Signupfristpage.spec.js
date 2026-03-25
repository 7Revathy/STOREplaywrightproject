const { test, expect } = require('@playwright/test');
const Signuppage = require('../page/Signuppage.js');

test('SignUp Page Click SignUP', async ({ page }) => {

  const signUp = new Signuppage(page);

  await signUp.navigate();

  await expect(page).toHaveTitle('STORE');

  await signUp.clickSignUp();

  await signUp.verifySignUpModal();

  await signUp.enterUsername('Revathy123');

  await signUp.enterPassword('RevathyPassword');

  await signUp.handleSignUpAlert();

  await signUp.clickRegister();

await expect(
  page.getByText('Samsung galaxy s6').first()
).toBeVisible();

});