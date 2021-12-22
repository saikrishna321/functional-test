const { config, logPath } = require('../wdio.base.conf')
const path = require('path')

const host = 'localhost'
const port = 4723
const deviceName = process.env.ANDROID_DEVICE || 'Pixel_3_XL_API_27'
// const deviceVersion = process.env.ANDROID_VERSION || '8.1'
const launchTimeout = 120000
const readyTimeout = 120000
// const commandTimeout = 30000
const isHeadless = process.env.HEADLESS || false
const appPath = './apps/android-demo-app.apk'
const appiumPath = path.join(__dirname, '../../../node_modules/.bin', 'appium')
console.log(appiumPath)

const droidConf = {
  ...config,
  services: [
    [
      'appium',
      {
        command: appiumPath,
        basePath: '/wd/hub',
        logPath,
        args: {
          debugLogSpacing: true,
          logLevel: 'info'
        }
      }
    ]
  ],
  hostname: host,
  port: port,
  specs: ['./src/test/app.*.spec.js'],
  capabilities: [
    {
      browserName: 'Android',
      platformName: 'Android',
      'appium:deviceName': deviceName,
      'appium:app': appPath,
      'appium:automationName': 'UiAutomator2',
      'appium:avdLaunchTimeout': launchTimeout,
      'appium:avdReadyTimeout': readyTimeout,
      'appium:isHeadless': isHeadless
    }
  ]
}

exports.config = droidConf
