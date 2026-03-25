const { test, expect } = require('@playwright/test');
const Signupclosepage = require('../page/Signupclosepage.js');


test('SignUp Page close Click', async ({ page }) => {

  const signupforclose = new Signupclosepage(page);

  await signupforclose.navigateforclose();

  await expect(page).toHaveTitle('STORE');

  await signupforclose.clickSignUpforclose();

  await signupforclose.verifySignUpModalforclose();

  await signupforclose.enterUsernameforclose('Revathy12345');
  await signupforclose.enterPasswordforclose('RevathyPassword')
  // Click Close button
  await signupforclose.clickforsignclosebutton();

  // Verify modal closed
  await signupforclose.verifyModalClosed();

});