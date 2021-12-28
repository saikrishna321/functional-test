const { config } = require('../wdio.base.conf');
const webConf = {
  ...config,
  hostname: 'localhost',
  baseUrl: 'http://the-internet.herokuapp.com',
  services: [...config.services],
  specs: ['./src/test/web.*.spec.js'],
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
