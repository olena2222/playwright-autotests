import { test, expect } from "@playwright/test";
test.use({
  storageState: "./.auth/user.json",
});

test.describe("create car", () => {
  test("Create car- valid case", async ({ request }) => {
    const response = await request.post(`${process.env.BASE_URL}/api/cars`, {
      data: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 122,
      },
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.status).toBe("ok");
    expect(body.data.carBrandId).toBe(1);
    expect(body.data.carModelId).toBe(1);
    expect(body.data.mileage).toBe(122);
  });

  test("Create car without 2 required fields", async ({ request }) => {
    const response = await request.post(`${process.env.BASE_URL}/api/cars`, {
      data: {
        carBrandId: 3,
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.status).toBe("error");
  });

  test("Create car with wrong carBrandId", async ({ request }) => {
    const response = await request.post(`${process.env.BASE_URL}/api/cars`, {
      data: {
        carBrandId: "bbbb",
        carModelId: 3,
        mileage: 122,
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.status).toBe("error");
  });
});
