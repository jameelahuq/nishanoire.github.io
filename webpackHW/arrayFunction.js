/**
 * Created by HUQ on 9/4/15.
 */


function functionInAFunction () {
 return (function createArrayFromAtoB(A, B) {
    var total = [];
    for (var i = A; i <= B; i++) {
      total.push(i);
    }

    return total;
  });
}

module.exports = functionInAFunction;