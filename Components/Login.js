import BaseComponent from "./BaseComponent.js";

export default class Login extends BaseComponent {
  constructor(page) {
    super(page);
  }

  get signInButton() {
    return this.page.locator("button.header_signin.btn");
  }

  get emailField() {
    return this.page.locator("#signinEmail");
  }

  get passwordField() {
    return this.page.locator("#signinPassword");
  }

  get loginButton() {
    return this.page.locator(
      "app-signin-modal .modal-footer button.btn-primary",
    );
  }

  async login(email, password) {
    await this.signInButton.click();
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
