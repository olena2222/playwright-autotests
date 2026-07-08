import { test, expect } from "@playwright/test";
import HomePage from "../PageObjects/HomePage.js";

test.describe("Registration form", () => {
    const RED_BORDER = "rgb(220, 53, 69)";
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.signup.checkVisibility(homePage.signup.signUpButton);
        await homePage.signup.signUpButton.click();
        await homePage.signup.checkVisibility(homePage.signup.registrationModal);
    });


    test("Check Name field is displayed", async () => {
        await homePage.signup.checkVisibility(homePage.signup.checkLabel("Name"));
    });

    test("Check empty field - name required", async () => {
        await homePage.signup.validateEmptyField(homePage.signup.nameField);
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name required")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check wrong data - name invalid - cyrillic", async () => {
        await homePage.signup.nameField.fill("пп");
        await homePage.signup.nameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check wrong data - name invalid - numbers", async () => {
        await homePage.signup.nameField.fill("123");
        await homePage.signup.nameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check wrong data - name invalid - special characters", async () => {
        await homePage.signup.nameField.fill("Olena@");
        await homePage.signup.nameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check wrong length name - 1 symbol", async () => {
        await homePage.signup.nameField.fill("k");
        await homePage.signup.nameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name has to be from 2 to 20 characters long")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check wrong length name - 21 symbols", async () => {
        await homePage.signup.nameField.fill("kkkkkkkkkkkkkkkkkkkkk");
        await homePage.signup.nameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Name has to be from 2 to 20 characters long")
        );
        await homePage.signup.checkBorderColor(homePage.signup.nameField, RED_BORDER);
    });

    test("Check valid name - 2 symbols", async () => {
        await homePage.signup.nameField.fill("ol");
        await homePage.signup.nameField.blur();
        await expect(homePage.signup.nameField).toHaveValue("ol");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });

    test("Check valid name - 20 symbols", async () => {
        await homePage.signup.nameField.fill("olenaolenaolenaolena");
        await homePage.signup.nameField.blur();
        await expect(homePage.signup.nameField).toHaveValue("olenaolenaolenaolena");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });


    test("Check Last Name field is displayed", async () => {
        await homePage.signup.checkVisibility(homePage.signup.checkLabel("Last name"));
    });

    test("Check empty field - last name required", async () => {
        await homePage.signup.validateEmptyField(homePage.signup.lastNameField);
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name required")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check wrong data - last name invalid - cyrillic", async () => {
        await homePage.signup.lastNameField.fill("лл");
        await homePage.signup.lastNameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check wrong data - last name invalid - numbers", async () => {
        await homePage.signup.lastNameField.fill("1234");
        await homePage.signup.lastNameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check wrong data - last name invalid - special characters", async () => {
        await homePage.signup.lastNameField.fill("Olena@");
        await homePage.signup.lastNameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name is invalid")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check wrong length last name - 1 symbol", async () => {
        await homePage.signup.lastNameField.fill("k");
        await homePage.signup.lastNameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name has to be from 2 to 20 characters long")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check wrong length last name - 21 symbols", async () => {
        await homePage.signup.lastNameField.fill("kkkkkkkkkkkkkkkkkkkkk");
        await homePage.signup.lastNameField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Last name has to be from 2 to 20 characters long")
        );
        await homePage.signup.checkBorderColor(homePage.signup.lastNameField, RED_BORDER);
    });

    test("Check valid last name - 2 symbols", async () => {
        await homePage.signup.lastNameField.fill("ol");
        await homePage.signup.lastNameField.blur();
        await expect(homePage.signup.lastNameField).toHaveValue("ol");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });

    test("Check valid last name - 20 symbols", async () => {
        await homePage.signup.lastNameField.fill("testteattesttesttest");
        await homePage.signup.lastNameField.blur();
        await expect(homePage.signup.lastNameField).toHaveValue("testteattesttesttest");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });


    test("Check email field is displayed", async () => {
        await homePage.signup.checkVisibility(homePage.signup.checkLabel("Email"));
    });

    test("Check empty field - email required", async () => {
        await homePage.signup.validateEmptyField(homePage.signup.emailField);
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Email required")
        );
        await homePage.signup.checkBorderColor(homePage.signup.emailField, RED_BORDER);
    });

    test("Check email incorrect - without @", async () => {
        await homePage.signup.emailField.fill("olenagmail.com");
        await homePage.signup.emailField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Email is incorrect")
        );
        await homePage.signup.checkBorderColor(homePage.signup.emailField, RED_BORDER);
    });

    test("Check email incorrect - without domain", async () => {
        await homePage.signup.emailField.fill("olena@");
        await homePage.signup.emailField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Email is incorrect")
        );
        await homePage.signup.checkBorderColor(homePage.signup.emailField, RED_BORDER);
    });

    test("Check email incorrect - without username", async () => {
        await homePage.signup.emailField.fill("@gmail.com");
        await homePage.signup.emailField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Email is incorrect")
        );
        await homePage.signup.checkBorderColor(homePage.signup.emailField, RED_BORDER);
    });

    test("Check valid email", async () => {
        await homePage.signup.emailField.fill("aqa-test@test.com");
        await homePage.signup.emailField.blur();
        await expect(homePage.signup.emailField).toHaveValue("aqa-test@test.com");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });



    test("Check password field is displayed", async () => {
        await homePage.signup.checkVisibility(homePage.signup.checkLabel("Password"));
    });

    test("Check empty field - password required", async () => {
        await homePage.signup.validateEmptyField(homePage.signup.passwordField);
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Password required")
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check wrong data password - 7 symbols", async () => {
        await homePage.signup.passwordField.fill("ol1@sd3");
        await homePage.signup.passwordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage(
                "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            )
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check wrong data password - 16 symbols", async () => {
        await homePage.signup.passwordField.fill("ol1@sd314azwedsd");
        await homePage.signup.passwordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage(
                "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            )
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check wrong data password - without integer", async () => {
        await homePage.signup.passwordField.fill("oooooooO");
        await homePage.signup.passwordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage(
                "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            )
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check wrong data password - without capital letter", async () => {
        await homePage.signup.passwordField.fill("ooooooo1");
        await homePage.signup.passwordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage(
                "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            )
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check wrong data password - without small letter", async () => {
        await homePage.signup.passwordField.fill("OOOOOOO1");
        await homePage.signup.passwordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage(
                "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
            )
        );
        await homePage.signup.checkBorderColor(homePage.signup.passwordField, RED_BORDER);
    });

    test("Check valid password - 8 symbols", async () => {
        await homePage.signup.passwordField.fill("olOl0125");
        await homePage.signup.passwordField.blur();
        await expect(homePage.signup.passwordField).toHaveValue("olOl0125");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });

    test("Check valid password - 15 symbols", async () => {
        await homePage.signup.passwordField.fill("olOl01251245Kjh");
        await homePage.signup.passwordField.blur();
        await expect(homePage.signup.passwordField).toHaveValue("olOl01251245Kjh");
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });


    test("Check re-enter password field is displayed", async () => {
        await homePage.signup.checkVisibility(
            homePage.signup.checkLabel("Re-enter password")
        );
    });

    test("Check empty field - re-enter password required", async () => {
        await homePage.signup.validateEmptyField(homePage.signup.repeatPasswordField);
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Re-enter password required")
        );
        await homePage.signup.checkBorderColor(homePage.signup.repeatPasswordField, RED_BORDER);
    });

    test("Check passwords do not match", async () => {
        await homePage.signup.passwordField.fill("olOl1234");
        await homePage.signup.passwordField.blur();
        await homePage.signup.repeatPasswordField.fill("olOl1235");
        await homePage.signup.repeatPasswordField.blur();
        await homePage.signup.checkVisibility(
            homePage.signup.errorMessage("Passwords do not match")
        );
        await homePage.signup.checkBorderColor(homePage.signup.repeatPasswordField, RED_BORDER);
    });

    test("Check passwords match", async () => {
        await homePage.signup.passwordField.fill("olOl1234");
        await homePage.signup.passwordField.blur();
        await homePage.signup.repeatPasswordField.fill("olOl1234");
        await homePage.signup.repeatPasswordField.blur();
        await expect(homePage.page.locator(".invalid-feedback")).toHaveCount(0);
    });


    test("Check register button is disabled if all fields empty", async () => {
        await homePage.signup.checkVisibility(homePage.signup.registerButton);
        await expect(homePage.signup.registerButton).toBeDisabled();
    });

    test("Check register button is disabled if data is invalid", async () => {
        await homePage.signup.nameField.fill("o");
        await homePage.signup.lastNameField.fill("oo");
        await homePage.signup.emailField.fill("example.com");
        await homePage.signup.passwordField.fill("ol123456");
        await homePage.signup.repeatPasswordField.fill("ol123456");
        await expect(homePage.signup.registerButton).toBeDisabled();
    });


    test("Check register - valid case", async () => {
        await homePage.signup.nameField.fill("Olena");
        await homePage.signup.lastNameField.fill("Test");
        await homePage.signup.emailField.fill("aqa-olena11111@test.com");
        await homePage.signup.passwordField.fill("Ool1234567");
        await homePage.signup.repeatPasswordField.fill("Ool1234567");
        await expect(homePage.signup.registerButton).toBeEnabled();
        await homePage.signup.registerButton.click();
        await expect(homePage.signup.registrationModal).toHaveCount(0, { timeout: 20000 });
    });


    
});