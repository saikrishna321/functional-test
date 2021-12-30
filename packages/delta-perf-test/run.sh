exit_c=0
cd tests
for file in *-test.js; do
  k6 run $file || exit_c=$?
done
exit $exit_c