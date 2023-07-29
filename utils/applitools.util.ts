import { BatchInfo, Configuration, VisualGridRunner, BrowserType, DeviceName, ScreenOrientation, Eyes, Target } from "@applitools/eyes-playwright"
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

let configuration
let runner
let eyes

export function setUpConfiguration(batchName: string){
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

export async function setUpTest(page: Page, appName: string, testName: string){
  eyes = new Eyes(runner, configuration)
  await eyes.open(page, appName, testName)
}

export async function checkWindowEyes(screenshot: string){
  await eyes.check(screenshot, Target.window().layout())
}

export async function closeEyes(){
  await eyes.close()
}

export async function cleaning(){
  const results = await runner.getAllTestResults()
  console.log("Visual test results", results)
}