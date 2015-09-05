//var result;


//require("./style.css");
require("./style.less");


import $ from "jquery";
const sick = "Awesome";


//--------------------------------------------------------
// 0. changes
// Prints "hello" in the body of the index.html
//--------------------------------------------------------

import changes from "./changes.js";
var docChanges = changes.documentReadyChanges;
docChanges();

//--------------------------------------------------------
// 0. doubler
// Doubles everything
//--------------------------------------------------------

import doubler from "./doubler.js";
console.log("string is: " + doubler("hello"));
console.log("number is: " + doubler(5));
doubler(function() {console.log("What?")});
console.log("array is: " + doubler([1,4,7,9,0]));
console.log ("object is:  " + doubler({a: "Jameela", Huq: "awesome", n: ["a","b","c"], lah:[1,2,3] }));


$(() => {
console.log(`ES6 is ${sick}`);
});



//TODO: Broken, fix it.
//let o = {firstName : "Jameela", lastName: "Huq"};
//let { firstName, lastName } = o;
//
//let firstName = o.firstName;
//let lastName = o.lastName;




//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------


//$(function() {
//  $("body").on("click", function() {
//    require("./style.ess");
//  })
//});
var result;

import argSum from "./argSum";
result = argSum(3,7,8);
console.log(result); // 18
result = argSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14

////--------------------------------------------------------
//// 2. splitSum()
//// Takes 2 arguments
////--------------------------------------------------------

import {splitSum as splitSum} from "./util";
result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5

////--------------------------------------------------------
//// 3. createArray()
//// Takes 2 arguments
////--------------------------------------------------------


var createArrayFromAtoB = require("./arrayFunction")();
result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]

////--------------------------------------------------------
//// 4. isTodayAWeekend()
//// Takes no arguments
////--------------------------------------------------------

import {TODAY as isTodayAWeekend} from "./isAWeekend";
result = isTodayAWeekend();
console.log(result);
import {TOMORROW as isTomorrowAWeekend} from "./isAWeekend";
result = isTomorrowAWeekend();
console.log(result);

//It will return true if today is Saturday or Sunday, otherwise, false


//weirdMath('+')(2,3);
//var weirdMath = function() {
//  console.log("lah");
//};

//wierdMath();
