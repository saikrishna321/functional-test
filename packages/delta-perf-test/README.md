### Run K6 perf tests locally

```shell
    ./run.sh
```

Above command will loop over all the files matching \*-test.js in `tests` folder and will execute them.
Reports will be generated in `reports` folder.

### Run K6 perf tests in docker

```shell
  docker build -t delta_perf_tests .
  docker run  -v $(pwd):/home/k6 delta_perf_tests
```

Note:-

1. Name the test files appropriately
2. Give a proper name to report file in handleSummary hook
