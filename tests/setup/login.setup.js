import { test as setup } from "@playwright/test";
import HomePage from "../../PageObjects/HomePage.js";

const AUTH_FILE = "./.auth/user.json";
setup("login", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.signin.login(
    "kamoko4666@googxs.com",
    "Ool123456"
  );
  await page.waitForURL("**/panel/garage");
  await page.context().storageState({ path: AUTH_FILE });
});