const { config } = require('./wdio.bs.conf')

const baseUrl = 'http://the-internet.herokuapp.com'
const browserName = process.env.BROWSER_NAME || 'Chrome'
const browserVersion = process.env.BROWSER_VERSION || 'latest'
const resolution = '1280x1024'
const os = process.env.OS || 'OS X'
const osVersion = process.env.OS_VERSION || 'Catalina'
const acceptCerts = false
const seleniumLogs = true
const seleniumVersion = '3.141.59'

const webConf = {
  ...config,
  specs: ['./src/test/web.*.spec.js'],
  hostname: 'hub.browserstack.com',
  baseUrl: baseUrl,
  capabilities: [
    {
      ...config.capabilities[0],
      browserName: browserName,
      browser_version: browserVersion,
      os: os,
      os_version: osVersion,
      resolution: resolution,
      'browserstack.selenium_version': seleniumVersion,
      'browserstack.acceptInsecureCerts': acceptCerts,
      'browserstack.seleniumLogs': seleniumLogs
    }
  ]
}

exports.config = webConf
