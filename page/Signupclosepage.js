const { expect } = require('@playwright/test');

class Signupclosepage {

  constructor(page) {
    this.page = page;

    this.signUpLinkforclose = '#signin2';
    this.modalTitleforclose = '#signInModalLabel';
    this.usernameFieldforclose = '#sign-username';
    this.passwordFieldforclose = '#sign-password';
    this.signUpButtonforclose = "button[onclick='register()']";
    this.signclosebuttonforclose = '#signInModal button:has-text("Close")';
  }

  async navigateforclose() {
    await this.page.goto('https://demoblaze.com/');
  }

  async clickSignUpforclose() {
    await this.page.click(this.signUpLinkforclose);
  }

  async verifySignUpModalforclose() {
    await expect(
      this.page.locator(this.modalTitleforclose)
    ).toBeVisible();
  }

  async enterUsernameforclose(username) {
    await this.page.fill(this.usernameFieldforclose, username);
  
  }

  async enterPasswordforclose(password) {
    await this.page.fill(this.passwordFieldforclose, password);
  }

  async handleSignUpAlertforclose() {
    this.page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });
  }

  async clickRegisterforclose() {
    await this.page.click(this.signUpButton);
  }



  async clickforsignclosebutton() {
    await this.page.click(this.signclosebuttonforclose);
  }

  async verifyModalClosed() {
    await expect(
      this.page.locator('#signInModal')
    ).toBeHidden();
  }

}

module.exports = Signupclosepage;