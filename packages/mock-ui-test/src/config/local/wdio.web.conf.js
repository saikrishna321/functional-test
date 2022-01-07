const { config } = require('../wdio.base.conf');
const driverLogs = 'wdio-chromedriver.log';

const webConf = {
  ...config,
  hostname: 'localhost',
  baseUrl: 'https://reqres.in/',
  services: [
    ...config.services,
    [
      'chromedriver',
      {
        logFileName: driverLogs,
        args: ['--silent'],
      },
    ],
  ],
  specs: ['./src/test/*.spec.js'],
  capabilities: [
    {
      browserName: 'chrome',
      proxy: {
        proxyType: 'manual',
        httpProxy: process.env.HTTP_PROXY,
        noProxy: process.env.NO_PROXY,
      },
    },
  ],
};

exports.config = webConf;
