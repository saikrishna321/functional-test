import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
export const baseurl = 'https://reqres.in/';

const options = Object.freeze({
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 1,
      iterations: 1,
      maxDuration: '20s',
    },
  },
  thresholds: {
    http_req_failed: ['rate <= 0'],
    http_req_duration: ['p(100) < 1'], // 200 is in ms
  },
});

export const runConfig = JSON.stringify(options);

export function resultGenerator(data, reportFileName) {
  reportFileName = '../reports/' + reportFileName + '.html';
  return {
    [reportFileName]: htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
