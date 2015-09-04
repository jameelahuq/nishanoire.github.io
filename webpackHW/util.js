/**
 * Created by HUQ on 9/4/15.
 */

var util = {
  splitSum : function (string, splitter) {
    return string.split(splitter).reduce(function(acc, n) {
      return parseInt(acc) + parseInt(n);
    }, 0);
  }
};


module.exports = util;
