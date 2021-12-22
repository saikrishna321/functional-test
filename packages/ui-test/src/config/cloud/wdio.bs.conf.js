const { config } = require('../wdio.base.conf');

const cloudUser = process.env.BROWSERSTACK_USER;
const cloudKey = process.env.BROWSERSTACK_ACCESS_KEY;
const localTunnel = process.env.LOCAL_TUNNEL || false;
const localIdentifier = process.env.TUNNEL_ID || 'Tunnel-ID';
const projectId = 'Project Name';
const buildId = 'Build Id';
const testName = 'Test Name';
const video = true;
const networkLogs = true;
const debug = true;

/**
 * Checks value and throw Error when value is null.
 * @param {*} value
 * @param {*} message
 */
function checkValueNotNull(value, message) {
  if (!value) {
    throw new Error(message);
  }
}

/**
 * Checks cloud setup.
 */
function validateCloudSetup() {
  checkValueNotNull(cloudUser, 'Cloud user not set.');
  checkValueNotNull(cloudKey, 'Cloud key not set.');
}

validateCloudSetup();

const bsConfig = {
  ...config,
  user: cloudUser,
  key: cloudKey,
  capabilities: [
    {
      project: projectId,
      build: buildId,
      name: testName,
      'browserstack.local': localTunnel,
      'browserstack.localIdentifier': localIdentifier,
      'browserstack.video': video,
      'browserstack.networkLogs': networkLogs,
      'browserstack.debug': debug,
      'browserstack.console': 'verbose',
      excludeDriverLogs: ['*'],
    },
  ],
};

exports.config = bsConfig;
exports.checkValueNotNull = checkValueNotNull;
