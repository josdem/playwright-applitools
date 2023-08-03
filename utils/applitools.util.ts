import { BatchInfo, Configuration, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes, Target, AndroidDeviceName } from "@applitools/eyes-playwright"
import { Page } from "@playwright/test"

const CHROME = {
  width: 1280,
  height: 768,
}
const FIREFOX = {
  width: 800,
  height: 600,
}
const EDGE = {
  width: 800,
  height: 600,
}
const SAFARI = {
  width: 1024,
  height: 768,
}

let configuration: Configuration
let runner: VisualGridRunner
let eyes: Eyes

function setUpConfiguration(batchName: string) {
  runner = new VisualGridRunner({ testConcurrency: 5 })
  configuration = new Configuration()
  configuration.setBatch(new BatchInfo(batchName))
  configuration.addBrowser(CHROME.width, CHROME.height, BrowserType.CHROME)
  configuration.addBrowser(FIREFOX.width, FIREFOX.height, BrowserType.FIREFOX)
  configuration.addBrowser(EDGE.width, EDGE.height, BrowserType.EDGE_CHROMIUM)
  configuration.addBrowser(SAFARI.width, SAFARI.height, BrowserType.SAFARI)
  configuration.addMobileDevice(AndroidDeviceName.Pixel_4, ScreenOrientation.PORTRAIT)
  configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
}

async function setUpTest(page: Page, appName: string, testName: string) {
  eyes = new Eyes(runner, configuration)
  await eyes.open(page, appName, testName)
}

async function checkWindowEyes(screenshot: string) {
  await eyes.check(screenshot, Target.window().layout())
}

async function closeEyes() {
  await eyes.close()
}

async function cleaning() {
  const results = await runner.getAllTestResults()
  console.log("Visual test results", results)
}

export default { setUpConfiguration, setUpTest, checkWindowEyes, closeEyes, cleaning }
