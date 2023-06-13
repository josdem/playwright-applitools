import { BatchInfo, Configuration, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes, Target } from "@applitools/eyes-playwright"

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

let configuration
let runner
let eyes

const setUpConfiguration = async (batchName) => {
  runner = new VisualGridRunner({ testConcurrency: 5 })
  configuration = new Configuration()
  configuration.setBatch(new BatchInfo(batchName))
  configuration.addBrowser(CHROME.width, CHROME.height, BrowserType.CHROME)
  configuration.addBrowser(FIREFOX.width, FIREFOX.height, BrowserType.FIREFOX)
  configuration.addBrowser(EDGE.width, EDGE.height, BrowserType.EDGE_CHROMIUM)
  configuration.addBrowser(SAFARI.width, SAFARI.height, BrowserType.SAFARI)
  configuration.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT)
  configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
}

const setUpTest = async (page, appName, testName) => {
  eyes = new Eyes(runner, configuration)
  await eyes.open(page, appName, testName)
}

const checkWindowEyes = async (screenshot) => {
  await eyes.check(screenshot, Target.window().layout())
}

const closeEyes = async () => {
  await eyes.close()
}

const cleaning = async () => {
  const results = await runner.getAllTestResults()
  console.log("Visual test results", results)
}

module.exports = {
  setUpTest,
  closeEyes,
  cleaning,
  checkWindowEyes,
  setUpConfiguration,
}
