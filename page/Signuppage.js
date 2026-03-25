class Signuppage {

  constructor(page) {
    this.page = page;

    this.signUpLink = '#signin2';
    this.modalTitle = '#signInModalLabel';
    this.usernameField = '#sign-username';
    this.passwordField = '#sign-password';
    this.signUpButton = "button[onclick='register()']";
  }

  async navigate() {
    await this.page.goto('https://demoblaze.com/');
  }

  async clickSignUp() {
    await this.page.click(this.signUpLink);
  }

  async verifySignUpModal() {
    await this.page.waitForSelector(this.modalTitle);
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameField, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordField, password);
  }

  async handleSignUpAlert() {
    this.page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });
  }

  async clickRegister() {
    await this.page.click(this.signUpButton);
  }

}

module.exports = Signuppage;