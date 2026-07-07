import { test, expect } from "../../fixtures/userGaragePage.js";

test.describe("Profil", () => {

  test("profile data api test", async ({
    userGaragePage,
  }) => {
    await userGaragePage.page.route("**/api/users/profile", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        json: {
          status: "ok",
          data: {
            userId: 999,
            photoFilename: "default-user.png",
            name: "Test name",
            lastName: "Test last name",
          },
        },
      });
    });

    await userGaragePage.page.goto("/panel/profile");

    await expect(
      userGaragePage.page.locator("app-profile p")
    ).toHaveText("Test name Test last name");
  });
});