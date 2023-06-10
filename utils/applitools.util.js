import {
  BatchInfo,
  VisualGridRunner,
  BrowserType,
  DeviceName,
  ScreenOrientation,
} from '@applitools/eyes-playwright'

let configuration
let runner

const setUpConfiguration = async (batchName) => {
    runner = new VisualGridRunner({ testConcurrency: 5 })
  
    configuration = eyes.getConfiguration()
    configuration.setBatch(new BatchInfo(batchName))
    configuration.addBrowser(CHROME.width, CHROME.height, BrowserType.CHROME)
    configuration.addBrowser(FIREFOX.width, FIREFOX.height, BrowserType.FIREFOX)
    configuration.addBrowser(EDGE.width, EDGE.height, BrowserType.EDGE_CHROMIUM)
    configuration.addBrowser(SAFARI.width, SAFARI.height, BrowserType.SAFARI)
    configuration.addDeviceEmulation(DeviceName.iPhone_11, ScreenOrientation.PORTRAIT)
    configuration.addDeviceEmulation(DeviceName.Pixel_5, ScreenOrientation.PORTRAIT)
}

const setUpTest = async (page, appName, testName) => {
    let eyes = new Eyes(runner, configuration)
    await eyes.open(page, appName, testName)
}

const closeEyes = async () => {
    await eyes.close()
}

const cleaning = async () => {
  const results = await runner.getAllTestResults()
  console.log('Visual test results', results)
}

module.exports = {
    setUpTest,
    closeEyes,
    cleaning,
    setUpConfiguration
}