import { test, expect } from "@playwright/test"
import { Constants } from "../properties/test.properties"
import applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  applitools.setUpConfiguration(Constants.BATCH_NAME)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, Constants.APP, test.info().title)
})

test("should validate page title", async ({ page }) => {
  await page.goto(Constants.URL)
  await expect(page).toHaveTitle(Constants.TITLE)
  await applitools.checkWindowEyes("Home Page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})
