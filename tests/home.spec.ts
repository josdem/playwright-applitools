import { test, expect } from "@playwright/test"
import properties from "../properties/test.properties"
import Applitools from "../utils/applitools.util"

test.beforeAll(async () => {
  Applitools.setUpConfiguration(properties.batchName)
})

test.beforeEach(async ({ page }) => {
  await Applitools.setUpTest(page, properties.app, test.info().title)
})

test("should validate page title", async ({ page }) => {
  await page.goto(properties.url)
  await expect(page).toHaveTitle(properties.title)
  await Applitools.checkWindowEyes("Home Page")
})

test.afterEach(async () => {
  await Applitools.closeEyes()
})

test.afterAll(async () => {
  await Applitools.cleaning()
})
