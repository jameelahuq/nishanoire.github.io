/**
 * Created by HUQ on 9/5/15.
 */

let reporter = function*() {
  yield 12;
  yield 24;
  yield 42;
  yield 84;
};

console.log(reporter());