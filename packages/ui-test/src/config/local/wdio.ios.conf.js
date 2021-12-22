const { config, logPath } = require('../wdio.base.conf')

const host = 'localhost'
const port = 4725
const deviceName = process.env.IOS_DEVICE || 'iPhone 12'
const deviceVersion = process.env.IOS_VERSION || '14.4'
const isHeadless = process.env.HEADLESS || false
const appPath = './apps/ios-demo-app.app.zip'
const commandTimeout = 30000

const iosConf = {
  ...config,
  services: [
    ...config.services,
    [
      'appium',
      {
        command: 'appium',
        logPath: logPath,
        args: {
          address: host,
          port: port,
          commandTimeout: commandTimeout,
          sessionOverride: true,
          debugLogSpacing: true,
          logLevel: 'debug'
        }
      }
    ]
  ],
  hostname: host,
  port: port,
  specs: ['./src/test/app.*.spec.js'],
  capabilities: [
    {
      platformName: 'iOS',
      browserName: 'iOS',
      'appium:platformVersion': deviceVersion,
      'appium:deviceName': deviceName,
      'appium:app': appPath,
      'appium:automationName': 'XCUITest',
      'appium:isHeadless': isHeadless
    }
  ]
}

exports.config = iosConf
