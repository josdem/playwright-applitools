const { test, expect } = require("@playwright/test")
const properties = require("../properties/test.properties")
const applitools = require("../utils/applitools.util")

test.beforeAll(async() => {
  await applitools.setUpConfiguration(properties.batchName)
})


test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(properties.app, page, test.info().title)
})

test("should validate page title", async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async() => {
  await applitools.cleaning()
})
