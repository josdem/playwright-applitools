import { test, expect } from "@playwright/test"
import properties from "../properties/test.properties"
import applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  applitools.setUpConfiguration(properties.batchName)
})

test.beforeEach(async ({ page }) => {
  await applitools.setUpTest(page, properties.app, test.info().title)
})

test("should validate page title", async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
  await applitools.checkWindowEyes("Home Page")
})

test.afterEach(async () => {
  await applitools.closeEyes()
})

test.afterAll(async () => {
  await applitools.cleaning()
})
