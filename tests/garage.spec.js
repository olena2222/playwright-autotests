
import { test, expect } from "../fixtures/userGaragePage.js";

test.describe("Garage page", () => {

  test("garage page opened for logged in user", async ({
    userGaragePage,
  }) => {
    await expect(userGaragePage.page).toHaveURL("https://qauto.forstudy.space/panel/garage");
  });
});