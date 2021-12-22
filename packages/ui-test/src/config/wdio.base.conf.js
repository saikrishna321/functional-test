require('global-agent/bootstrap')
const { TimelineService } = require('wdio-timeline-reporter/timeline-service')

const maxInstances = 1
const mochaTimeout = 60000
const waitTimeout = 10000
const retryTimeout = 120000
const retryCount = 3
const logPath = './logs'
const logType = 'trace'
const bailCount = 0
const reportPath = 'report'
const browserSize = '1366x1024'
const implicit = 1000
const pageLoad = 60000
const scriptLoad = 60000

/**
 * Sets Browser options.
 * @param {int} windowSize
 * @param {int} implicitWait
 * @param {int} pageWait
 * @param {int} scriptWait
 */
function setBrowserOptions (windowSize, implicitWait, pageWait, scriptWait) {
  if (!driver.isMobile) {
    browser.setTimeouts(implicitWait, pageWait, scriptWait)
    const size = windowSize.split('x')
    browser.setWindowSize(parseInt(size[0]), parseInt(size[1]))
  } else {
    browser.setImplicitTimeout(implicitWait)
  }
}

exports.logPath = logPath
exports.config = {
  runner: 'local',
  path: '/wd/hub',
  maxInstances: maxInstances,
  logLevel: logType,
  bail: bailCount,
  waitforTimeout: waitTimeout,
  connectionRetryTimeout: retryTimeout,
  connectionRetryCount: retryCount,

  framework: 'mocha',
  mochaOpts: {
    require: ['@babel/register'],
    ui: 'bdd',
    timeout: mochaTimeout
  },

  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: reportPath,
        embedImages: true,
        fileName: 'timeline-report.html',
        screenshotStrategy: 'before:click'
      }
    ]
  ],

  services: [[TimelineService]],

  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  before: function (capabilities, specs) {
    setBrowserOptions(browserSize, implicit, pageLoad, scriptLoad)
    require('../utils/CustomCommands')
  }
}
