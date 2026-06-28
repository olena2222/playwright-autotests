import { test as base } from "@playwright/test";
import GaragePage from "../PageObjects/GaragePage.js";

const AUTH_FILE = "./.auth/user.json";
export const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: AUTH_FILE,
    });
    const page = await context.newPage();
    const garagePage = new GaragePage(page);
    await garagePage.navigate();
    await use(garagePage);
    await context.close();
  },
});

export { expect } from "@playwright/test";
