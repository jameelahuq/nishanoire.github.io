webpack: homework

Put the following code into your entry.js file and make it
run using webpack


var result;

//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------

var argSum = require("./argSum");
result = argSum(3,7,8);
console.log(result); // 18
result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14

//--------------------------------------------------------
// 2. splitSum()
// Takes 2 arguments
//--------------------------------------------------------

var splitSum = require("./util").splitSum;
result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5

//--------------------------------------------------------
// 3. createArray()
// Takes 2 arguments
//--------------------------------------------------------

var createArrayFromAtoB = require("./arrayFunction")();
result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]

//--------------------------------------------------------
// 4. isTodayAWeekend()
// Takes no arguments
//--------------------------------------------------------

var isTodayAWeekend = require("./isAWeekend")["TODAY"]

result = isTodayAWeekend();
console.log(result);
// It will return true if today is Saturday or Sunday, otherwise, false

On 4 September 2015 at 14:09, Samer Buna <samer@codinghouse.co> wrote:
var result;

//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------

var argSum = require("./argSum");
result = argsSum(3,7,8);
console.log(result); // 18
result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14

//--------------------------------------------------------
// 2. splitSum()
// Takes 2 arguments
//--------------------------------------------------------

var splitSum = require("./util").splitSum;
result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5

//--------------------------------------------------------
// 3. createArray()
// Takes 2 arguments
//--------------------------------------------------------

var createArrayFromAtoB = require("./arrayFunction")();
result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]

//--------------------------------------------------------
// 4. isTodayAWeekend()
// Takes no arguments
//--------------------------------------------------------

var isTodayAWeekend = require("./isAWeekend")["TODAY"]

result = isTodayAWeekend();
console.log(result);
// It will return true if today is Saturday or Sunday, otherwise, false

