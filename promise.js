function print(err, msg, cb) {
  cb = cb || function () {};
  console.log(msg);
  return cb();
}

// print(null, 'Hello World', function () {});
// print(null, 'Hello World');

function printAsync(msg) {
  return new Promise(function (resolve, reject) {
    print(null, msg);
    // return reject(new Error(`died on msg=${msg}`));
    resolve();
  });
}

printAsync('let\'s fking go')
  .then(function() { printAsync('lets go again') })
  .then(function() { printAsync('no more callbacks') })
  .catch(function (e) { debugger; console.error(e.message) });
