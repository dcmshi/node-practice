function print(err, msg, cb) {
  cb = cb || function () {};
  console.log(msg);
  return cb();
}

// print(null, 'Hello World', function () {});
// print(null, 'Hello World');


/*
who's man's is this?
here's chaining callback prints, but why would you want this?
 */
print(
  null,
  'First Print',
  function () {
    print(
      null,
      'Second Print',
      function () {
        print(
          null,
          'Third Print'
        )
      })
  }
);
