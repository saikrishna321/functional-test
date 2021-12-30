import http from 'k6/http';
import { check } from 'k6';
import { baseurl, resultGenerator, runConfig } from './config.js';

const createSingleUserEndpoint = baseurl + 'api/users';

export const options = JSON.parse(runConfig); // deep copy k6 options defined in config.js
options.thresholds.http_req_duration = ['p(100) < 900']; // set/override the request duration for the end point
options.scenarios.contacts.iterations = 2; // set/override the iterations

const headers = {
  headers: {
    'Content-Type': '',
    Accept: '*/*',
  },
};

const payload = {
  name: 'morpheus',
  job: 'leader',
};

export default function () {
  const response = http.post(createSingleUserEndpoint, payload, headers);
  check(response, {
    'is status 201': (r) => r.status === 201,
  });
}

// function to generate reports using handleSummary hook of K6
export function handleSummary(data) {
  const fileName = 'POST_api_users';
  return resultGenerator(data, fileName);
}
