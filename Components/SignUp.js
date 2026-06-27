import BaseComponent from "./BaseComponent";

export default class Signup extends BaseComponent {
  constructor(page) {
    super(page);
  }
  get signUpButton() {
    return this.page.locator("button.hero-descriptor_btn");
  }
  get registrationModal() {
    return this.page.locator(".modal-content");
  }
  get nameField() {
    return this.page.locator("#signupName");
  }
  get lastNameField() {
    return this.page.locator("#signupLastName");
  }
  get emailField() {
    return this.page.locator("#signupEmail");
  }
  get passwordField() {
    return this.page.locator("#signupPassword");
  }
  get repeatPasswordField() {
    return this.page.locator("#signupRepeatPassword");
  }
  get registerButton() {
    return this.page.locator("app-signup-modal .modal-footer button");
  }

}
