import http from 'k6/http';
import { check } from 'k6';
import { baseurl, resultGenerator, runConfig } from './config.js';

const getSingleUserEndpoint = baseurl + 'api/users/2';

export const options = JSON.parse(runConfig); // deep copy k6 options defined in config.js
options.thresholds.http_req_duration = ['p(100) < 500']; // set/override the request duration for the end point
options.scenarios.contacts.iterations = 10; // set/override the iterations

export default function () {
  const response = http.get(getSingleUserEndpoint);
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
}

// function to generate reports using handleSummary hook of K6
export function handleSummary(data) {
  const fileName = 'GET_api_users';
  return resultGenerator(data, fileName);
}
