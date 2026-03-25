class Loginpage {

  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoblaze.com/');
  }

  async enterUsername(username) {
    await this.page.locator('#loginusername').fill(username);
  }

  async enterPassword(password) {
    await this.page.locator('#loginpassword').fill(password);
  }

  async signIn() {
    await this.page.locator('button:has-text("Log in")').click();
  }
}

module.exports = Loginpage;