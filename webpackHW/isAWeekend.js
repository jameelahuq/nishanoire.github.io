/**
 * Created by HUQ on 9/4/15.
 */

//var isTodayAWeekend = require("./isAWeekend")["TODAY"]
//
//result = isTodayAWeekend();
//console.log(result);


var isTodayAWeekend = {
  TODAY: function() {
    var today = new Date();
    var numOfDay = today.getDay();
    return (numOfDay === 0 || numOfDay === 6);
  },

  TOMORROW: function() {
    var today = new Date();
    var numOfDay = today.getDay();
    return (numOfDay === 6 || numOfDay === 5);
  },

  YESTERDAY: function() {
    var today = new Date();
    var numOfDay = today.getDay();
    return (numOfDay === 1 || numOfDay === 0);
  }
}

module.exports = isTodayAWeekend;