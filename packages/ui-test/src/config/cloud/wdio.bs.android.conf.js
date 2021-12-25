const { config, checkValueNotNull } = require('./wdio.bs.conf');

const deviceName = process.env.DEVICE_NAME || 'Google Pixel 3';
const deviceVersion = process.env.DEVICE_VERSION || '10.0';
const appUrl = process.env.APP_URL;
const appiumVersion = '1.19.1';
const acceptCerts = false;
const deviceLogs = true;
const appiumLogs = true;
const disableAnimations = true;

/**
 * Checks cloud setup.
 */
function validateCloudSetup() {
  checkValueNotNull(appUrl, 'App URL not set.');
}

validateCloudSetup();

const androidConf = {
  ...config,
  specs: ['./src/test/app.*.spec.js'],
  capabilities: [
    {
      ...config.capabilities[0],
      device: deviceName,
      browserName: 'Android',
      os: 'Android',
      os_version: deviceVersion,
      app: appUrl,
      real_mobile: true,
      'appium:automationName': 'UiAutomator2',
      'browserstack.appium_version': appiumVersion,
      'browserstack.acceptInsecureCerts': acceptCerts,
      'browserstack.deviceLogs': deviceLogs,
      'browserstack.appiumLogs': appiumLogs,
      disableAnimations: disableAnimations,
      'appium:autoGrantPermissions': true,
    },
  ],
};

exports.config = androidConf;
